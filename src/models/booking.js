
const booking = (sequelize, DataTypes) => {
    const Booking = sequelize.define("booking", {
        room_id: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        customer_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        check_in_date: {
            type: DataTypes.DATEONLY,
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        check_out_date: {
            type: DataTypes.DATEONLY,
            validate: {
                notEmpty: true
            },
            allowNull: false
        }
    });

    return Booking;
}

export default booking;