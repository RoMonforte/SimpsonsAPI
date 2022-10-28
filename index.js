const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require ('./middlewares/error.handler');


app.use(express.json());

const whitelist = ['http://localhost:8080','http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null,true);
    } else {
      callback(new Error('No Permitido'))
    }
  }
}
app.use(cors(options));


app.get('/', (req,res) => {
  res.send('Server en express')
});



app.listen(port,() => {
  console.log('Si estoy corriendo en el puerto ' + port)
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
