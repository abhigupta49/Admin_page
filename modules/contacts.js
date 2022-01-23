var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/contactForm',
    {useNewUrlParser:true}
);

var conn = mongoose.connection;

var contactSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    number:Array,
    message:String,
    date:Date,
});

var contactModel = mongoose.model('contact',contactSchema);
module.exports=contactModel;