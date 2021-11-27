const express = require('express');
const app = express();
//we might have several different of these things
//though it is usually just one

app.get('/', (req, res) =>{
    res.send({ hi: 'there'});
});

app.listen(5000);