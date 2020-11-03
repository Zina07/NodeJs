var express = require('express');
var exphbs  = require('express-handlebars');
 
const port = 3001;
var app = express();


app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));
  
  app.set('view engine', 'handlebars');

  // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());


app.post('/form/studentsList', (req, res) => {
  console.log('form parameter', req.body.username); 
});
  
const students = ['Jean', 'Binta', 'Agathe', 'Adil'];

  app.get('/handlebars', (req, res) => {
    console.log('req', students)
    res.render('home', {
      body: (req.params.name)
    })
  });

    //const newstudents = students.map.username ... à finir ....//

  app.post('/handlebars', (req, res) => {
    console.log('req', newstudents)
    res.render('home', {
      body: (req.params.name)
    })
  });



app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });




  
/*app.get('/handlebars', (req, res) => {
    res.render('home', {
        body: 'Welcome to express simple form !!!',
    });
});*/