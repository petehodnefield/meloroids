import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";
import { seedDB } from "./seeds/seeds.js";
import auth from "./utils/auth.js";

const db = await mongoose.connect(
  process.env.MONGO_DB_URI || "mongodb://localhost:27017"
);
const seed = await seedDB();
console.info("connected to db!");

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
  context: auth.authMiddleware,
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
