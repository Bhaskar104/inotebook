const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () =>{
    console.log("inside connect mongo");
    mongoose.connect(mongoURI);
    console.log("connected to mongo")
}


module.exports = connectToMongo;