const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");

var bodyParser = require('body-parser')

const url = "mongodb://127.0.0.1:27017/mydb";

var dbo;

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    dbo = db.db("test");
    console.log("Connected to MongoDB");
})

app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/login/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    dbo.collection("userInfo").find({ "username": req.body.username }).toArray(function(err, result) {
        if (err) throw err;
        if (result == undefined)
            res.send("ConnectionFailed");
        else if (result.length == 0)
            res.send("UserNotFound");
        else if (result[0].password == req.body.password)
            res.send("PasswordCorrect");
        else
            res.send("PasswordIncorrect");
    });
});

app.post('/api/register/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    dbo.collection("userInfo").find({ "username": req.body.username }).toArray(function(err, result) {
        if (err) throw err;
        if (result == undefined)
            res.send("Failed");
        else if (result.length != 0)
            res.send("UserExist");
        else {
            let newUserInfo = {
                username: req.body.username,
                password: req.body.password
            }
            dbo.collection("userInfo").insertOne(newUserInfo, function(err, result) {
                if (err) throw err;
                res.send("Success");
            });
        }
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});