var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({      //FOR EACH POST
    // your code here
    postID:
    {
        type: Number            //unique ID for post (format: user id + post id)
    },
    userID:
	{
        type: Number            //details of the user whom this post belongs to
    },
    username:
    {
        type: String            //the name of the poster
    },
    content:
	{
        type: String            //the post itself
    },
    date:
    {
        type: Date              //date when the post was made
    },
    category:
    {
        type: String            //category which is used to filter posts
    },
    likes:
	{
        type: Number            //a count of all likes
    },
    comments:
    {
        type: Number            //a count of all comments
    },
});

module.exports = mongoose.model('Post', PostSchema);
