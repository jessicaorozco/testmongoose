const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config()

port = process.env.PORT
uri = process.env.URI_DBLOCAL

app.use(morgan('dev'));
 
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor OK en puerto ${port}`  );
});

// Routes
app.use(require('./route'));

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(db => console.log(`conectado la bd ${uri}`))
    .catch(err => console.error(err));

