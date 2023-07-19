const express = require('express');

const PORT = 3001;

// express function return app server object
const app = express();

app.get('/home', (request, response) => {
    // response.send("Hi there, welcome to get");
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