const express = require("express");
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let todos = [];
let currentId = 1;

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.get('/api/v1/todos', function (req, res) {
    const response = {
        status: 'OK',
        code: 200,
        data: todos
    };
    res.send(response);
});

app.get('/api/v1/todos/:id', function (req, res) {
    const id = Number(req.params.id);
    const todoItem = _.find(todos, item => item.id === id);
    const response = {
        status: todoItem ? 'OK' : 'ERROR',
        code: todoItem ? 200 : 404,
        data: todoItem
    };
    res.send(response);
});

app.post('/api/v1/todos', function (req, res) {
    const text = req.body.text;
    const id = currentId;
    const todoItem = {id, text};
    todos.push(todoItem);
    currentId++;
    const response = {
        status: 'OK',
        code: 200,
        data: todos
    };
    res.send(response);
});

app.delete('/api/v1/todos/:id', function (req, res) {
    const id = Number(req.params.id);

    // If not found
    if (!_.find(todos, item => item.id === id)) {
        const response = {
            status: 'ERROR',
            code: 404,
            data: undefined
        };
        res.send(response);
        return;
    }

    todos = _.filter(todos, item => id !== item.id)
    const response = {
        status: 'OK',
        code: 200,
        data: todos
    };
    res.send(response);
});

app.listen(9000, () => {
    console.log("El servidor está inicializado en el puerto 9000");
});