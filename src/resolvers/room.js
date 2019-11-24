export default {
    Query: {
        rooms: async (parent, args, { models }) =>
            await models.Room.findAll(),


    },

    Mutation: {
        addRoom: async (parent, { room_name }, { models }) => {
            console.log("models", models)
            return await models.Room.create({
                room_name
            }).then(result => result);
        }
    }
}