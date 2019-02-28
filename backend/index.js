const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./app/controllers/UserController.js');
const cors = require('./app/middlewares/cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors); 
app.use(userRoutes);


app.get('/', (req, res) => {
    res.send('its work');
})

app.listen(3000, () => console.log('Server running'));

module.exports = app;