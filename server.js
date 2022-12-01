
require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;


app.get('/', (req, res)=>{
    res.send('hellow world')
})

app.get('/dburl', (req, res)=>{
    res.send("My connection string is "+process.env.DATABASE_URL)
})


app.listen(PORT, ()=>{
    console.log("App is running at PORT "+ PORT)
})