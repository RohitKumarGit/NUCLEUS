const express = require('express')
const app = express()
app.get('/userlogin',async (req,res)=>{
    res.send({
        name:'Shantanu Goyal',
        place:'Indirapuram'
    })
})
app.listen(8080,function(){
    console.log("server is running at port 8080")
});