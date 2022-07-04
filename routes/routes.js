const express = require(`express`);
const sessions = require(`express-session`);
const ctrl = require(`../controllers/Controller.js`);

const app = express();

app.get(`/favicon.ico`, ctrl.getFavicon);

//all views
app.get(`/`, ctrl.getIndex);
app.get('/login', (req, res)=>{
    console.log(req.session);
    if(req.session.user){
        console.log("already logged in with user:",req.session.user);
        return res.redirect(`/home`);
    } else {
        ctrl.getLogin(req.session,res);
    }
});

//app.get(`/home`, ctrl.getMain);
app.get(`/profile`, ctrl.getMainProfile);
app.get(`/guest`, ctrl.getMainGuest);
app.get(`/register`, ctrl.getReg);
app.get(`/terms`, ctrl.getTNC);

//all actions
app.get(`/addAcc`, ctrl.getAddAcc);
app.get(`/getAcc`, ctrl.getAcc);
app.get(`/add`, ctrl.getAdd);
app.get(`/delete`, ctrl.getDelete);

app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err);
        }
        res.redirect(`/login`);
    });
});
module.exports = app;
