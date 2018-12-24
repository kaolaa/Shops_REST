const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Passport config 
require('./conf/passport')(passport);
 
const posts = require('./api/posts');
app.use('/api/posts',posts);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));
