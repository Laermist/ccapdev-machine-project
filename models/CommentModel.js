var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({       //FOR EACH COMMENT/REPLY
    // your code here
    commentID:
    {
        type: Number            //unique ID for comment (format: user id + id of the post/comment that this replied to + comment id)
    },
	userID:
	{
		type: Number        //details of the user who commented this
	},
    postID:
    {
        type: Number
    },
    content:
	{
        type: String            //the actual comment or reply
    },
    replyToID:
    {
        type: Number            //the ID of the post or comment that this new comment replied to
    },
});

module.exports = mongoose.model('Comment', CommentSchema);
