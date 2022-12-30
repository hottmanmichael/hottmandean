import { Client, isFullPage } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Prod
const GUEST_DATABASE_ID = "474893c8-97ea-434b-9e34-1287fffa6ff5";
const RSVP_SUBMISSION_DATABASE_ID = "e0f2957bc3ce4d939a2430eb05438c17";

// DEV
const GUEST_COPY_DATABASE_ID = "cca0601cb36c44a588d601f955b44f6a";
const RSVP_COPY_SUBMISSION_DATABASE_ID = "d9528da7cf9a4ac2bd7d8ddea5de1595";

export interface InvitedGuest {
  fullName: string;
  firstName: string;
  lastName: string;
  isAttending: boolean;
}

type UnknownInvitedGuest = InvitedGuest | undefined;

export interface InvitedPrimaryGuest extends InvitedGuest {
  id: string;
  emailAddress: string | null;
  phoneNumber: string | null;
  dietaryRestrictions: string;
  guestNotes: string;
  additions: InvitedGuest[];
}

function getValue(guest: any, prop: string): string | null {
  if (!isFullPage(guest)) return null;

  const value = guest.properties[prop];

  if (value?.type === "title" && value.title?.[0]?.plain_text) {
    return value.title?.[0]?.plain_text.trim();
  }

  if (value?.type === "rich_text" && value.rich_text?.[0]?.plain_text) {
    return value.rich_text?.[0]?.plain_text.trim();
  }

  if (value?.type === "phone_number" && value?.phone_number) {
    return value?.phone_number.trim();
  }

  if (value?.type === "formula" && value.formula.type === "string") {
    return value.formula.string.trim();
  }

  return null;
}

function getCheckboxValue(guest: any, prop: string): boolean | null {
  if (!isFullPage(guest)) return null;

  const value = guest.properties[prop];

  if (value?.type === "checkbox") {
    return value.checkbox.valueOf();
  }

  return null;
}

function formatGuest(guest: any): InvitedPrimaryGuest {
  if (!isFullPage(guest)) return null;

  return {
    id: guest.id,

    fullName: getValue(guest, "Full Name"),
    emailAddress: getValue(guest, "Email Address"),
    phoneNumber: getValue(guest, "Phone Number"),
    firstName: getValue(guest, "First Name"),
    lastName: getValue(guest, "Last Name"),
    isAttending: getCheckboxValue(guest, "Attending"),

    dietaryRestrictions: getValue(guest, "Dietary Restrictions"),
    guestNotes: getValue(guest, "Guest Notes"),

    additions: [
      getValue(guest, "Partner First Name")
        ? {
            fullName: getValue(guest, "Plus One Full Name"),
            firstName: getValue(guest, "Partner First Name"),
            lastName: getValue(guest, "Partner First Name"),
            isAttending: getCheckboxValue(guest, "Plus One Attending"),
          }
        : null,
      getValue(guest, "Child 1 First Name")
        ? {
            fullName: getValue(guest, "First Guest Full Name"),
            firstName: getValue(guest, "Child 1 First Name"),
            lastName: getValue(guest, "Child 1 First Name"),
            isAttending: getCheckboxValue(guest, "First Guest Attending"),
          }
        : null,
      getValue(guest, "Child 2 First Name")
        ? {
            fullName: getValue(guest, "Second Guest Full Name"),
            firstName: getValue(guest, "Child 2 First Name"),
            lastName: getValue(guest, "Child 2 First Name"),
            isAttending: getCheckboxValue(guest, "Second Guest Attending"),
          }
        : null,
    ].filter((add) => !!add),
  };
}

export async function getAllGuestsAttendance(): Promise<InvitedPrimaryGuest[]> {
  const response = await notion.databases.query({
    database_id: GUEST_DATABASE_ID,
    filter: {
      property: "Full Name",
      formula: {
        string: {
          is_not_empty: true,
        },
      },
    },
    sorts: [
      {
        property: "Full Name",
        direction: "ascending",
      },
    ],
  });

  const formattedGuests = response.results.map((guest) => {
    return formatGuest(guest);
  });

  return formattedGuests;
}

export interface CreateRSVPInput {
  guestId: string;
  guest: InvitedPrimaryGuest;
}

export async function createRSVP(input: CreateRSVPInput) {
  if (!input.guestId) {
    throw new Error("Missing Guest Id");
  }

  const [plusOne, firstGuest, secondGuest] = input.guest.additions;

  await notion.pages.update({
    page_id: input.guestId,
    properties: {
      Attending: {
        checkbox: input.guest.isAttending,
      },
      "Dietary Restrictions": {
        rich_text: [
          {
            type: "text",
            text: {
              content: input.guest.dietaryRestrictions || "",
            },
          },
        ],
      },
      "Guest Notes": {
        rich_text: [
          {
            type: "text",
            text: {
              content: input.guest.guestNotes || "",
            },
          },
        ],
      },
      ...(plusOne
        ? {
            "Plus One Attending": {
              checkbox: plusOne?.isAttending || false,
            },
          }
        : {}),
      ...(firstGuest
        ? {
            "Plus One Attending": {
              checkbox: firstGuest?.isAttending || false,
            },
          }
        : {}),
      ...(secondGuest
        ? {
            "Plus One Attending": {
              checkbox: secondGuest?.isAttending || false,
            },
          }
        : {}),
    },
  });

  const updatedGuest = await notion.pages.retrieve({
    page_id: input.guestId,
  });

  if (!isFullPage(updatedGuest)) return null;

  return formatGuest(updatedGuest);
}

export async function recordSubmission(input: CreateRSVPInput) {
  const response = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: RSVP_SUBMISSION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: `${input.guest.lastName} - ${input.guestId}`,
            },
          },
        ],
      },
      Raw: {
        rich_text: [
          {
            text: {
              content: JSON.stringify(input),
            },
          },
        ],
      },
      "Submitted By": {
        relation: [
          {
            id: input.guestId,
          },
        ],
      },
    },
  });

  return response.id;
}
