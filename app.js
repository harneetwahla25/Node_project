//require express package
const express = require('express');
//initialise a new instance of express
const app = express();
//assign a port
const PORT = 3000;

app.get('/',(req,res) => {
    res.send('Hello, World!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
