var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1> About Vijay Sales  </h1>"
        +"<hr/>"
        +"<h3>owner ravi tambade</h3>"
        +"<h3>our products</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

app.listen(9000);
console.log("Vijay sales server running on 9000");