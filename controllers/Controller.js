const db = require('../models/DML.js');
const bcrypt = require(`bcrypt`);
const UserModel = require('../models/UserModel.js');
const PostModel = require('../models/PostModel.js');
const CommentModel = require('../models/CommentModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function(req, res) {
        res.render('Intro'); // This is to load the page initially
        
    },

    getLogin: function(req, res) {
        res.render('Login');
    },

    getMain: function(req, res) {
        db.findMany(PostModel, {}, 'userID content date likes comments', function (result) {
            if(result != null)
			{
                console.log('Loading posts.');
                console.log(result);
                //res.render('../views/partials/feed',{userID:result.user, content:result.content, date:result.date, likes:result.likes, comments:result.comments});
                res.render('Main',{"Posts": result}); // This is to load the page initially
            }
			else
			{
                res.render('Main');
            }
        });
    },

    getMainProfile: function(req, res) {
        res.render('Main-profile');
    },

    getMainGuest: function(req, res) {
        res.render('Main-Guest');
    },

    getReg: function(req, res) {
        res.render('Register');
    },

    getTNC: function(req, res) {
        res.render('TermsNConditions');
    },

    getPost: function(req, res) {
        db.findOne(PostModel, {postID: req.query.postID}, 'postID', function (result)
		{
            res.send(result);
        });
    },

    getAddAcc: function(req, res) {
        UserModel.findOne({}, {}, function(error, result) {
            var max_id = 100
             if(result){
                 max_id=result.userID +1;
             }
             bcrypt.hash(req.query.pwrd1,10).then(hash=>{
                var user = {
                userID: max_id,
                name: req.query.uname,
                email: req.query.email,
                pword: hash
                }
                db.insertOne(UserModel, user, function(result)
                {
                    res.send(result);
                });
            }).catch(err=>{
                console.log(err)
            });
            
         }).sort({userID:-1}).limit(1);
    },

    getAcc: function(req,res) {
        db.findOne(UserModel, {email: req.query.email}, 'name email pword', function (result)
		{
            if(result)
            {
                bcrypt.compare(req.query.pword, result.pword, function(err,result2){
                    if(result2)
                    {
                        console.log(result.name);
                        res.send({message:"success",name:result.name});
                    }
                    else
                    {
                        res.send({message:"incorrect"});
                    }
                });
            }
            else
            {
                res.send({message:"non-existing"});
            }
        });
    },

    getAdd: function(req, res) {
        // your code here
		var post = { user: req.query.user, content: req.query.content, date: req.query.date, likes: req.query.likes, comments: req.query.comments}
        db.insertOne(PostModel, post, function(result)
		{
            res.render('../views/partials/feed',{user:post.user, content:post.content, date:post.date, likes:post.likes, comments:post.comments});
        });
    },

    getDelete: function (req, res) {
        db.deleteOne(PostModel,{postid:req.query.postid},function(result)
		{
            res.send(result);
        });
    }

}

module.exports = controller;
