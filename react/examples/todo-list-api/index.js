const express = require("express");
const bodyParser = require('body-parser');
const _ = require('lodash');
const uuidv4 = require('uuid/v4')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let todos = [];
let users = [{id: 1, username: 'admin', password: '12345'}];
let currentId = 1;

const getAuthenticatedUser = function(req) {
    // Get token header
    const tokenHeader = req.header('Authorization');
    if (!tokenHeader) return null;

    // Get token part
    const parts = tokenHeader.split(' ');
    if (parts.length !== 2) return null;
    const token = parts[1];

    // Find user
    const user = _.find(users, u => u.token === token);
    if (!user) return null;
    return user;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "*")
  next();
});

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.get('/api/v1/todos', function (req, res) {
    const user = getAuthenticatedUser(req);
    if (user) {
        res.status(200).send({todos});
    } else {
        res.status(401).send({message: 'Invalid username and/or password'});
    }
});

app.get('/api/v1/todos/:id', function (req, res) {

    const user = getAuthenticatedUser(req);
    if (user) {
        const id = Number(req.params.id);
        const todoItem = _.find(todos, item => item.id === id);
        res.status(todoItem ? 200 : 404).send({todoItem});
    } else {
        res.status(401).send({message: 'Invalid username and/or password'});
    }
});

app.post('/api/v1/todos', function (req, res) {

    const user = getAuthenticatedUser(req);
    if (user) {
        const text = req.body.text;
        const id = currentId;
        const todoItem = {id, text};
        todos.push(todoItem);
        currentId++;
        res.status(200).send({todos});
    } else {
        res.status(401).send({message: 'Invalid username and/or password'});
    }

});

app.delete('/api/v1/todos/:id', function (req, res) {

    const user = getAuthenticatedUser(req);
    if (user) {
        const id = Number(req.params.id);
        // If not found
        if (!_.find(todos, item => item.id === id)) {
            res.status(404).send(undefined);
            return;
        }
        todos = _.filter(todos, item => id !== item.id);
        res.status(200).send({todos});
    } else {
        res.status(401).send({message: 'Invalid username and/or password'});
    }


    
});

app.post('/api/v1/users/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = _.find(users, 
        u => (u.username === username && u.password === password)
    );

    // Check user existence
    if (user) {
        user.token = uuidv4();
        res.status(200).send({user: user})
    } else {
        res.status(401).send({message: 'Invalid username and/or password'});
    }
});

app.get('/api/v1/users/current', function (req, res) {
    const user = getAuthenticatedUser(req);
    res.status(200).send({user: user})
});

app.listen(9000, () => {
    console.log("El servidor está inicializado en el puerto 9000");
});
