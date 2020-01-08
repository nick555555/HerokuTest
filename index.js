var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Welcome to my API');
})

app.listen(PORT,function(){
    console.log('listening on port ' + PORT);
})