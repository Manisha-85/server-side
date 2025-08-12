const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const conString = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/products', (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("demodb");
         database.collection("products").find({}).toArray().then(documents=>{
              res.send(documents);
              res.end();
         });
    });
});

app.get('/product/:id', (req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{

        var database = clientObj.db("demodb");

        database.collection("products").findOne({id:parseInt(req.params.id)}).then(document=>{
             res.send(document);
             res.end();
        })
    });
});

app.get('/users', (req, res)=>{
    mongoClient.connect(conString).then(clientObj=>{

        var database = clientObj.db("demodb");
        database.collection("users").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
       });
    });
});

app.post('/register-user',(req, res)=>{

    mongoClient.connect(conString).then(clientObj=>{

        var database = clientObj.db("demodb");

        var user = {
            UserName: req.body.UserName,
            Age: parseInt(req.body.Age),
            Password: req.body.Password
        };

        database.collection("users").insertOne(user).then(()=>{
             console.log("User Registered");
             res.redirect("/users");
        });
    });
});
app.delete('/delete-user/:username', (req, res)=>{
    mongoClient.connect(conString).then(clientObj=>{

        var database = clientObj.db("demodb");

        database.collection("users").deleteOne({UserName:req.params.username}).then(()=>{
              console.log("User Deleted");
              res.redirect("/users");
        });
    });
});


app.listen(5000);
console.log(`Server Started http://127.0.0.1:5000`);