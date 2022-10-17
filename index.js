const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const routerApi = require('./routes')

app.get('/', (req,res) => {
  res.send('Server en express')
});



app.listen(port,() => {
  console.log('Si estoy corriendo en el puerto ' + port)
});

routerApi(app);
