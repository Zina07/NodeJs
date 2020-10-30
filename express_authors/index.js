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
const Authors = ['Beowulf', 'Hamlet, Othello, Romeo and Juliet MacBeth', 'Oliver Twist, A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being'];


app.get('/Authors/4/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[3])
});

app.get('/Authors/3/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[2])
});

app.get('/Authors/2/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[1])
});

app.get('/Authors/1/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[0])
});

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

//========================== CORRECTIONS ========================================//

// Pour l'exercice 4
app.get('/json/authors/:id/', (req, res) => {
    const id = req.params.id;

    if (id > authorsBooks.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { name, nationality } = authorsBooks[id - 1]

        res.json({
            name,
            nationality
        });
    }
});

app.get('/json/authors/:id/books', (req, res) => {
    const id = req.params.id;

    if (id > authors.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { books } = authorsBooks[id - 1]

        res.json({ books });
    }
});

// Pour l'exercice 3
app.get('*', function (req, res) {
    res.send('Error');
});

// Run server
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});