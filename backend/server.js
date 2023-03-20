import mongoose from "mongoose";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";
import { seedDB } from "./seeds/seeds.js";

const db = await mongoose.connect("mongodb://localhost:27017");
// const seed = await seedDB();
console.info("connected to ", db?.connections[0]?._connectionString);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: "bounded",
  persistedQueries: false,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
