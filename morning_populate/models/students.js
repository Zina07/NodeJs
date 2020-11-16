const { models } = require("mongoose");

const studentASchema = new mongoose.Schema({
    
    firstName: String,
    surname: String,
    year: Number,
    address: ObjectID,
});
console.log('studentA', studentASchema);

module.exports = students;