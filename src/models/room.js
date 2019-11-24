const room = (sequelize, DataTypes) => {
    const Room = sequelize.define("room", {
        room_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            },
            allowNull: false
        }
    });

    return Room;
}

export default room;