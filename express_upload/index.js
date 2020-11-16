const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.static('public')); // permet d'executer localhost/Img.. aller ds public pour recup le contenu.

app.get('/', (req, res, next) => {
    res.send('Welcome to express upload')
});



mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err)); // initialise ma bdd

const UserSchema = new mongoose.Schema({

    username: { type: [String], index: true },
    firstName: String,
    surname: String,
    profilePicture: String,
});
console.log('User', UserSchema);

const User = mongoose.model('User', UserSchema);


const user1 = new User({
    username:'Fraise_id',
    firstName: 'Zina',
    surname: 'Fraise',
    profilePicture: './img/img1.png',
});
user1.save().then(res => console.log(res));



app.listen(port, () => {
    console.log('Server started on port: ' + port);
});