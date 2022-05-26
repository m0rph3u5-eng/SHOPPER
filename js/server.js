const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

// Connecting Database
let db = new sqlite3.Database(":memory:" , (err) => {
    if(err)
    {
        console.log("Error Occurred - " + err.message);
    }
    else
    {
        console.log("DataBase Connected");
    }
})
     
app.get('/' , (req , res)=>{
    res.send("SHOPPER");
})
    
app.listen(4000 , ()=>{
    console.log("server started");
})