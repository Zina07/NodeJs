const port = 3000;



app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});



app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });