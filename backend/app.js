const express=require("express");
const app=express();
var mongoose=require('mongoose');
const bodyParser = require('body-parser');
const routes=require("./Routes/routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const DB="mongodb+srv://saikat:majumder@cluster0.ciffj.mongodb.net/Store?retryWrites=true&w=majority";
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

app.get("/",async(req,res)=>{
    res.send("Hello");
})
app.use("/",routes);

const port=4000;
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})