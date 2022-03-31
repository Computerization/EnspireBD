var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.all('*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

app.use(bodyParse.urlencoded({extended:true})) ;
app.use(bodyParse.json());

app.get('/',function(req,res) {
});

app.post('/',function(req,res){
    name=req.body.username ;
    pwd=req.body.password;
    console.log("name:" + name);
    console.log("password:" +pwd);
    
    res.status(200).send(
        "name:"+name+" | password:"+pwd
      );
});

var server = app.listen(8080);

console.log("Server Runing at http://127.0.0.1:8080/");