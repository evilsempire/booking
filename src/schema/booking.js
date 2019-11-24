import { gql } from 'apollo-server-express';

export default gql`

    extend type Query{
        bookings: [Booking!]
    }

    extend type Mutation{
        addBooking(customer_name:String!
            room_id:ID!
            check_in_date:Date!
            check_out_date:Date!
            ): Booking
    }

    type Booking{
        id:ID!
    }
`;