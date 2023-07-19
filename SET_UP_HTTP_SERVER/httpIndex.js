const http = require('http');

const PORT = 3000;

// http module contains createServer function which return a server object
// Using this we can create a basic http server using http module and takes as callback as an argument
// This function will created a server object but didn't start the server yet

const server = http.createServer(function listener (request, response) {
    /**
     * request -> we wiil be able to see details of incoming http request -> object
     * response -> object -> we will be able to configure the response accordingly for an incoming request
     * 
     * 
     */
// this callback is a kid of a lister function that is going to collect
// every http request that we will make to our server


console.log("Incoming Request Object", request);
if(request.url == '/home') {
    // if we make a request on /home this if block will be executed

    // response.end("Welcome to home");
    response.write("First Call");
    response.write("Second Call");
    // response.end("Success");


    // Send HTML file and json object using this set up.
}
// console.log("Incoming Response Object", response);
// console.log("Request Received");

});

server.listen(PORT, function exec() {
    //once we successfully boot up the server on the given port
    // this callback will be executed
    console.log(`Server is up and running on PORT: ${PORT}`);
})


