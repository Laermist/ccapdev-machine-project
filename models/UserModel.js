var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({      //FOR EACH USER PROFILE
    // your code here
	userID:
	{
		type: Number            //unique ID for user
	},
    name:
	{
        type: String            //name or the user to be displayed
    },
    email:
	{
        type: String            //email of the user
    },
    pword:
	{
        type: String            //password of the user
    },
});

module.exports = mongoose.model('User', UserSchema);
