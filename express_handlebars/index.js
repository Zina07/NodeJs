var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();

app.engine('handlebars', exphbs({
  defaultLayout: false,
  layoutsDir: __dirname + "views"
}));

app.set('view engine', 'handlebars'); 


 
app.get('/handlebars', function (req, res) {
    res.render('home', {
      title: 'Ma Mon Chezmoi'
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

