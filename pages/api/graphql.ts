import { createYoga, createSchema } from "graphql-yoga";

const typeDefs = /* GraphQL */ `
  type Query {
    guests: [Guest!]!
  }

  type Guest {
    id: String!
    fullName: String!
    plusOneFullName: String
    firstGuestFullName: String
    secondGuestFullName: String
    isAttending: Boolean
    isPlusOneAttending: Boolean
    isFirstGuestAttending: Boolean
    isSecondGuestAttending: Boolean
  }
`;

const resolvers = {
  Query: {
    guests() {
      return [{ name: "Nextjs" }];
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
