module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        rond: DataTypes.STRING,
        date: DataTypes.STRING,
        destination: DataTypes.STRING,
        people: DataTypes.STRING, 
        seat: DataTypes.STRING,
    })
    return Booking
}