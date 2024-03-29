//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
const items=[];
const workitems=[];


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/",function(req,res){
    const day = date.getDate();
    res.render("list", {dayToday: day, newTodo: items});
});

app.post("/",function(req,res){
    const item = req.body.newItem;

    if(req.body.list === "Work list") {
        workitems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");   
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{dayToday: "Work list",newTodo: workitems});
});

app.listen(3000,function(){
    console.log("Server running at port 3000");
});