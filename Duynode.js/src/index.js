const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const hbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(__dirname + '/public'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//http logger
//app.use(morgan('combined'))

//template engine
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/view');

///

app.use(methodOverride('_method'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
