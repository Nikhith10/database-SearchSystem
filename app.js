const express= require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/DetailsDB';

const app = express();
app.use(express.json())
mongoose.connect(url);
const con = mongoose.connection;
con.on("open", ()=>
{
    console.log("connected...");
}
);
const detailsRoute = require("./routes/details.js");
app.use('/students',detailsRoute);
app.listen(7800,()=>
{
    console.log("server Started");
});
