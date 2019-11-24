import { gql } from 'apollo-server-express';

export default gql`

    extend type Query{
        rooms: [Room!]
    }


    extend type Mutation{
        addRoom(room_name:String!): Room!
    }

    type Room {
        id:ID!
        room_name:String!
    }

`;