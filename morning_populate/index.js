const mongoose = require('mongoose');
const { ObjectID } = require('bson');
mongoose.connect('mongodb://localhost:27017/studentAdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));

const studentASchema = require('./models/students');
const addrestudSchema = require('./models/adress');
 
const port = 3001;


const studentASchema = new mongoose.Schema({
    
  firstName: String,
  surname: String,
  year: Number,
  address: ObjectID,
});
console.log('studentA', studentASchema);

const addrestudSchema = new mongoose.Schema({
    
  streetName: String,
  streetNumber: String,
  postCode: String,
 
});
console.log('addrestud', addrestudSchema);






