const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}) .then(() => {console.log("Database Connected")});


var userSchema =new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	message:String
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;

