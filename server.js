console.log("Web Serverni boshlash");
//(npm i express@4.18.2)
const express = require("express");
const app = express(); // expressning objecti app ga yuboriladi
const http = require("http");

// 1 Entry codes: Express ma'lumotiga bog'liq bo'lgan kodlar un;
app.use(express.static("public")); // har qanday brouzerdan kirib kelayotdan sp'rovlar un public folderi ochiqligi;
app.use(express.json()); // kirib kelayotgan json holatdagi data ni object holatga o'girb beradi;
app.use(express.urlencoded({extended: true})); // HTML dan form request uchun express servis qabul qilib olishi un;

// 2 Session codes

// 3 Views codes: Backenda front end yasash un(esj install qilib undan foydalanamiz);
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing codes: Routerlar un
// serverga path qilish un:
app.get("/hello", function(req, res){
    res.send(`<h1 style="background: yellow">Hello World by ALI!!!</h1>`);
});

app.get("/gift", function(req, res){
    res.send(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`);    
});

// git init -- qilib (.gitignore) folder ocamiz