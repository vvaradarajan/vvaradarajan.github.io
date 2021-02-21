//serve the static website for quick testing
//install express 'npm install express'
//command is node serve.js
const express = require('express');
const app = express();
const port='8088'
app.use(express.static('.'))
app.listen(port, () => console.log(`Started the website on port ${port}`));