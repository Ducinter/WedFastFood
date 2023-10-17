const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/food-odering',{useNewUrlParser: true})
    .catch(e => {
        console.error('Connection errol', e.message)
    })

const db = mongoose.connection
module.exports = db;