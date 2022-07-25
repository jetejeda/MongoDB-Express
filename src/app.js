const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');//To understand POST verbs
const indexRoutes = require('./routes/routes.js');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

//settings
dotenv.config({path: './config/config.env'})
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
const connectDB = require('./libs/db-connection');
connectDB();
//middlewares -> funciones que se ejecutan cada vez que llega una petición al servidor
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'), ()=>{
    console.log('server running on port: ', app.get('port'));
});