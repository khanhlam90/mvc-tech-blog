const helpers = require('./utils/helpers');

const path = require('path');
const express = require('express');
//  to use express-session and sequelize store; sets up an Express.js session and connects the session to our Sequelize database
const session = require('express-session');

const routes = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3001;

//importing the connection to Sequelize from config/connection.js
const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// set up Handlebars.js
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers }); // pass the helpers

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





