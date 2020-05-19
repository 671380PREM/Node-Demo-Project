const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3, 4, 5, 6]);
});

app.listen(3000, ()=>{
    console.log('listening port 3000');
})