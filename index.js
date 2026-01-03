console.log("Web server is working!!!");

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err){
        console.log("Error: ", err);       
    } else {
        user = JSON.parse(data);
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running succesfully on port: ${PORT}`);    
});

