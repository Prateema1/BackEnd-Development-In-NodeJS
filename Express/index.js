const express = require('express');

const PORT = 3001;

// express function return app server object
const app = express();

const mylogger = (req, res, next) => {
    console.log("Logging from middleware1");
    next();
}

const exlogger = (req, res, next) => {
    console.log("Logging from middleware2");
    next();
}

app.get('/home', mylogger, exlogger, (request, response) => {
    // response.send("Hi there, welcome to get");

    console.log("Last Middleware");  // Last middleware actually sends the request
    response.json({
        message: "OK get"
    })
})

app.post('/home', (request, response) => {
    response.send("Hi there, welcome to post");
    // response.json({
    //     message: "OK get"
    // })
})

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
})