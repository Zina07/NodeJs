var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());


app.post('/form/signup', (req, res) => {
  console.log('form parameter', req.body.username); 
  res.redirect('/home')
});



app.engine('handlebars', exphbs({
  defaultLayout: false,
  layoutsDir: __dirname + "views"
}));

app.set('view engine', 'handlebars'); 


 
app.get('/handlebars', function (req, res) {
    res.render('home', {
      title: ' Mon Chezmoi'
    });
});
 
/*app.get('/', function(req, res) {

  res.render('home', {
    title: 'Ma homepage'
  });
});*/

const port = 3001;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

