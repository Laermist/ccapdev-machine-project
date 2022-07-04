const dotenv = require(`dotenv`);
const express = require(`express`);
const session = require(`express-session`);
const hbs = require(`hbs`);
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const db = require(`./models/DML.js`);
const ctrl = require(`./controllers/Controller.js`);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);
app.use(session({
    secret: 'sikwet',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 300000}
}));
app.get('/home', function(req, res) {
    if(req.session.views)
    {
        req.session.views++;
        console.log('views: ' + req.session.views);
        console.log('expires in: ' + (req.session.cookie.maxAge / 1000));
        ctrl.getMain(req.session,res);
    }
    else
    {
        req.session.views = 1;
        console.log('Welcome, your session will expire after 5 minutes. Refresh!');
        res.end('Welcome, your session will expire after 5 minutes. Refresh!');
    }   
});

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(express.static(`public`));
app.use(`/`, routes);

db.connect();

app.listen(port, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + port);
});
