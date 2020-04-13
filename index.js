const express = require("express");
const routes = express.Router();
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("views"));
server.use(express.static("css"));

server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

routes.get("/", function(req, res){
    return res.render("index")
})

server.listen(5000, function(){
    console.log("Server is running on port 5000.")
})