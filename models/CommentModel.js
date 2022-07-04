var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({       //FOR EACH COMMENT/REPLY
    // your code here
    commentID:
    {
        type: Number            //unique ID for comment (format: user id + id of the post/comment that this replied to + comment id)
    },
    userID:
    {
	type: Number            //details of the user who commented this
    },
    username:
    {
        type: String            //the username of the poster
    },
    postID:
    {
        type: Number            //the post being replied to
    },
    content:
    {
        type: String            //the actual comment or reply
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
