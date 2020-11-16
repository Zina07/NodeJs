const { models } = require("mongoose");

const addrestudSchema = new mongoose.Schema({
    
    streetName: String,
    streetNumber: String,
    postCode: String,
   
});
console.log('addrestud', addrestudSchema);

module.exports = address;