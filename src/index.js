const express = require("express");

const app  = express();

app.get("/",(req, res, next)=>{
    res.send("Home Page");
    res.end();
});

app.get("/details/:id/:name/:price", (req, res, next)=>{

        res.send(`ProductId=${req.params.id}<br>Name=${req.params.name}<br>Price=${req.params.price}`);
        res.end();

});

app.get("*", (req, res, next)=>{
    res.send("Not Found - 404 Page you requested Not Found");
    res.end();
});

app.listen(4000);
console.log(`Server Started http://127.0.0.1:4000`);