import { createYoga, createSchema } from "graphql-yoga";
import {
  createRSVP,
  CreateRSVPInput,
  recordSubmission,
} from "../../src/api/notion";

const typeDefs = /* GraphQL */ `
  type Query {
    foo: String
  }

  type Mutation {
    createRSVP(input: CreateRSVPInput): PrimaryGuest!
  }

  input AdditionalGuestInput {
    fullName: String
    firstName: String
    lastName: String
    isAttending: Boolean
  }

  input PrimaryGuestInput {
    id: String!
    emailAddress: String
    phoneNumber: String
    dietaryRestrictions: String
    guestNotes: String
    fullName: String
    firstName: String
    lastName: String
    isAttending: Boolean
    additions: [AdditionalGuestInput]!
  }

  input CreateRSVPInput {
    guestId: String!
    guest: PrimaryGuestInput!
  }

  type AdditionalGuest {
    fullName: String
    firstName: String
    lastName: String
    isAttending: Boolean
  }

  type PrimaryGuest {
    id: String!
    emailAddress: String
    phoneNumber: String
    dietaryRestrictions: String
    guestNotes: String
    fullName: String
    firstName: String
    lastName: String
    isAttending: Boolean
    additions: [AdditionalGuest]!
  }
`;

const resolvers = {
  Query: {
    foo: () => "",
  },
  Mutation: {
    createRSVP(parent: unknown, { input }: { input: CreateRSVPInput }) {
      recordSubmission(input);
      return createRSVP(input);
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});
