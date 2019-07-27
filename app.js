var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("landing");
})

app.get("/campgrounds",(req,res)=>{
    var campgrounds=[
        {name:"salmon creek", image:""},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEtom84s-GfoGX2kQteC6XPoznI20buiV9vXWAWWIz1V4dhCX"},
        {name:"Mountain goats", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1pnGqlT-YQVAySfjjvasbOl4ezGQKzS5bx3QXO0J5DgUQDcY"}
        
    ];
    res.render("campgrounds",{campgrounds:campgrounds});
})

app.listen(3000,()=>{
    console.log("server is on");
})