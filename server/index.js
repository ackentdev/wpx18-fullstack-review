// Import dependencies
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
// Import variables
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {login, register, logout, userSession} = require('./controller/authCtrl')

// top-level middleware
const app = express();
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

// massive
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('connected to db')
    app.set("db", db)
}).catch( err => console.log(err))

// endpoints
// authorization
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', userSession)
// 

// server listening
// shell command that stops nodemon from refreshing when you develop in front-end: 
// ** nodemon --ignore src **
app.listen(SERVER_PORT, () => console.log(`Hey! Listen! on port ${SERVER_PORT}`))