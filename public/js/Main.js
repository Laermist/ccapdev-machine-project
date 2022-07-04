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
        db.findMany(PostModel, {}, 'userID username content date likes comments', function (result) {
            if(result)
			{
                console.log('Loading posts.');
                console.log(result);
                //res.render('../views/partials/feed',{userID:result.user, content:result.content, date:result.date, likes:result.likes, comments:result.comments});
                db.findMany(CommentModel, {}, 'commentID userID username postID content', function (result2) {
                    if(result2)
                    {
                        console.log('Loading comments.');
                        console.log(result2);
                        res.render('Main',{"Session": req,"Posts": result,"Comments": result2,}); // This is to load the page initially
                    }
                    else
                    {
                        res.render('Main');
                    }
                });
                
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
        var user = null;
        db.findOne(UserModel, {email: req.query.email}, 'name email pword', function (result)
		{
            if(result)
            {
                bcrypt.compare(req.query.pword, result.pword, function(err,result2){
                    if(result2)
                    {
                        user = {name:result.name, email:result.email};
                        req.session.user = user;
                        console.log(req.session);       // remove later on, for debugging purposes only
                        res.send({message:"success",name:result.name});
                    }
                    else
                    {
                        req.session.user = user;
                        res.send({message:"incorrect"});
                    }
                });
            }
            else
            {
                req.session.user = user;
                res.send({message:"non-existing"});
            }
        });
    },

    getAdd: function(req, res) {
        // your code here
        PostModel.findOne({}, {}, function(error, result) {
            var max_id = 0;
                if(result){
                    max_id=result.postID +1;
                }
                var post = {
                    postID: max_id + userID*10000,
                    userID: req.query.userID,
                    username: req.query.username,
                    content: req.query.content,
                    date: req.query.date,
                    category: req.query.category,
                    likes: req.query.likes,
                    comments: req.query.comments
                }
                db.insertOne(PostModel, post, function(result)
                {
                    res.send(result);
                });
            }).catch(err=>{
                console.log(err)
         }).sort({userID:-1}).limit(1);
    },

    getDelete: function (req, res) {
        db.deleteOne(PostModel,{postid:req.query.postid},function(result)
		{
            res.send(result);
        });
    }

}

module.exports = controller;
