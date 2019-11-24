import { gql } from "apollo-server-express";

import roomSchema from "./room";
import bookingSchema from "./booking";


const linkSchema = gql`
scalar Date
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  roomSchema,
  bookingSchema
]