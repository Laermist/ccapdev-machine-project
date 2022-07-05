const dotenv = require(`dotenv`);
const express = require(`express`);
const session = require(`express-session`);
const cookieParser = require(`cookie-parser`);
const hbs = require(`hbs`);
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const db = require(`./models/DML.js`);
const ctrl = require(`./controllers/Controller.js`);

const app = express();
var sess;
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);
app.use(cookieParser());
var oneday = 1000 * 60 * 60 * 24;       // one day
app.use(session({
    secret: 'sikwet',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: oneday}
}));

app.get('/home', function(req, res) {
    sess = req.session;
    if(!sess.user){
        return res.redirect(`/login`);
    } else {
        console.log("current user:",sess.user);
        ctrl.getMain(req.session,res);
    }
});

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

dotenv.config();
port = process.env.PORT || 9090 || 3000;
hostname = process.env.HOSTNAME;

app.use(express.static(`public`));
app.use(`/`, routes);

db.connect();

app.listen(port, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + port);
});
