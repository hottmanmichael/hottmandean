import { Client, isFullPage } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface InvitedGuest {
  fullName: string;
  firstName: string;
  lastName: string;
  isAttending: boolean;
}

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

export async function getAllGuestsAttendance(): Promise<InvitedPrimaryGuest[]> {
  const databaseId = "474893c8-97ea-434b-9e34-1287fffa6ff5";

  const response = await notion.databases.query({
    database_id: databaseId,
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
    if (!isFullPage(guest)) {
      return null;
    }

    return {
      id: guest.id,

      fullName: getValue(guest, "Full Name"),
      emailAddress: getValue(guest, "Email Address"),
      phoneNumber: getValue(guest, "Phone Number"),
      firstName: getValue(guest, "First Name"),
      lastName: getValue(guest, "Last Name"),
      isAttending: true,

      dietaryRestrictions: "",
      guestNotes: "",

      additions: [
        getValue(guest, "Partner First Name")
          ? {
              fullName: getValue(guest, "Plus One Full Name"),
              firstName: getValue(guest, "Partner First Name"),
              lastName: getValue(guest, "Partner First Name"),
              isAttending: true,
            }
          : null,
        getValue(guest, "Child 1 First Name")
          ? {
              fullName: getValue(guest, "First Guest Full Name"),
              firstName: getValue(guest, "Child 1 First Name"),
              lastName: getValue(guest, "Child 1 First Name"),
              isAttending: true,
            }
          : null,
        getValue(guest, "Child 2 First Name")
          ? {
              fullName: getValue(guest, "Second Guest Full Name"),
              firstName: getValue(guest, "Child 2 First Name"),
              lastName: getValue(guest, "Child 2 First Name"),
              isAttending: true,
            }
          : null,
      ].filter((add) => !!add),
    };
  });

  return formattedGuests;
}
