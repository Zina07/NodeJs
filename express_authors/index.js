/*===================* Exercice_0 *===================*/

/*const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});*/


//app.get('/Accueil', (req, res, next) => {
   // console.log('req', req)
  //  console.log('res', res)
  //  res.send('Author API')
//});//
/*===================* Exercice_1 *===================*/

const express = require('express');
const app = express();


/*
const id = ['Lawrence Nowell Uk', 'William Shakespeare UK', 'Charles Dickens US', 'Oscar Wilde UK'];

app.get('/Authors/4/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(id[3])
});

app.get('/Authors/3', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(id[2])
});

app.get('/Authors/2', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(id[1])
});

app.get('/Authors/1', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(id[0])
});

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
*/

/*===================* Exercice_2*===================*/
const Authors = ['Beowulf', 'Hamlet', 'Oliver Twist', 'Dorian Gray'];
const books = ['Beowulf', 'Othello, Romeo and Juliet, MacBeth', 'A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being, Earnest'];

app.get('/Authors/4', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[3]) (books[3])
});

app.get('/Authors/3/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[2]) (books[2])
});

app.get('/Authors/2/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[1]) (books[3])
});

app.get('/Authors/1/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[0]) (books[0])
});

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
