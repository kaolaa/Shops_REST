const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
// // error handling middleware
// app.use(function(err,callback){

// });

// Passport config 
require('./conf/passport')(passport);
 
const shops = require('./api/shops');
app.use('/api/shops',shops);

const users = require('./api/users');
app.use('/api/users',users);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));
