var express = require("express");
var cors = require("cros");
var app = express();
app.use(cors({
    origin:'http://127.0.0.1:5000',
    method:['get','post','put','delete']
}));
app.get('/', (req, res)=>{
    res.send("API Home");
    res.end();
});
const  corsOptions = {
    origin : ' * ',
    methods: ['GET']
}

app.get("/path", corsOptions, (req, res)=>{

})
app.get('/products', (req, res)=>{
    res.json([{Name:'TV', Price:45000.44}, {Name:'Mobile', Price:12000}]);
    res.end();
});

app.get('/product/:id', (req, res)=>{
    res.send(`You are request Product Id=${req.params.id}`);
    res.end();
});

app.post('/add-product', (req, res)=>{
    res.send("Product Added Successfully..");
    res.end();
});

app.put('/edit-product', (req, res)=>{
    res.send("Product Modified Successfully");
    res.end();
});

app.delete('/delete-product', (req, res)=>{
    res.send("Product Deleted..");
    res.end();
});

app.listen(5000);
console.log(`Server Started http://127.0.0.1:5000`);
