import { UserInputError } from 'apollo-server';
import moment from "moment"
import { sequelize } from '../models';
export default {
    Query: {
        bookings: async (parent, args, { models }) =>
            await models.Booking.findAll()
    },

    Mutation: {
        addBooking: async (parent, { customer_name, room_id, check_in_date, check_out_date }, { models }) => {


            const check_in = moment(check_in_date).format('YYYY-MM-DD');
            const check_out = moment(check_out_date).format('YYYY-MM-DD')
            //first check if check in and check out are not same
            if (check_in === check_out) {
                throw new UserInputError('Check in and Check out dates cannot be same.');
            }

            //Now check if there is booking already made or not

            return await sequelize.query(`SELECT id FROM
            bookings
            WHERE 
            (:check_in  >= check_in_date AND :check_in <= check_out_date)
            AND 
            (:check_out  <= check_out_date)
            
            AND room_id = :room_id`, { replacements: { check_in, check_out, room_id }, type: sequelize.QueryTypes.SELECT }).then(async result => {
                console.log("result", result.length)
                if (result.length) {
                    throw new UserInputError('Room is already booked for this date!');
                } else {
                    return await models.Booking.create({
                        customer_name, room_id, check_in_date, check_out_date
                    }).then(result => result)
                }
            })



        }
    }
}