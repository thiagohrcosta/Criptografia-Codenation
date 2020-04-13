const express = require("express");


const server = express();

server.listen(5000, function(){
    console.log("Server is running on port 5000.")
})