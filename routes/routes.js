const express = require(`express`);
const sessions = require(`express-session`);
const ctrl = require(`../controllers/Controller.js`);

const app = express();

app.get(`/favicon.ico`, ctrl.getFavicon);

//all views
app.get(`/`, ctrl.getIndex);
app.get(`/login`, ctrl.getLogin);
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

module.exports = app;