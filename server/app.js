const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
// handle production
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'));  
    //handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html')); 

}

// Passport config 
require('./conf/passport')(passport);
 
const shops = require('./api/shops');
app.use('/api/shops',shops);

const users = require('./api/users');
app.use('/api/users',users);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));
