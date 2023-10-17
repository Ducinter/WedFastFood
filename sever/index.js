const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express()
const productRouter = require('./routes/productRouter');

var cosrOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(cosrOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
db.on('error', console.error.bind(console, 'MongoDb connection errol:'))

app.get("/",(req, res) => {
    res.json({message: "Welcome to Food Ordering"});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/',productRouter);