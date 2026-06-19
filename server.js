require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const mydb = require("./madal/db")



app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to the backend of truthchain");
    res.end();
});

app.post('/contact', async(req,res)=>{
    const {uname,email,usubject,message} = req.body;
    const fdata = {uname,email,usubject,message};
    console.log(fdata);
    try{
      if(!uname || !email || !usubject || !message){
        return res.status(400).json({message:"Please fill all the fields client error 400"});
      }
      else{
        const myquery = "INSERT INTO usertable (uname,email,usubject,message) VALUES (?,?,?,?)";
        mydb.query(myquery,[uname,email,usubject,message],(e,s)=>{
           if (e) {
              console.log("MySQL Error:", e);
              return res.status(500).json({message: "Error inserting data into database" });
}
            else{
                console.log(s);
                return res.status(200).json({message:"Data saved successfully"});
            }
        });
      }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Error inserting data into database 500"});
    }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});