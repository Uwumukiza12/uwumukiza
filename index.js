const express= require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser=require('body-parser');
const cors = require('cors')
dotenv.config();

const app = express();
//MIDDLE WARES
app.use(cors())
app.use(bodyParser.json());
//router
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/', (req, res)=>{
    res.send("We are on home")
});

mongoose.connect(
    process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true},
    ()=> console.log("connected to database")
);

app.listen(4000, ()=>
console.log("app listening on the http://localhost:4000")
);