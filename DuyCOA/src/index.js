const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 4000;
const path = require('path')
const hbs = require('express-handlebars');

//
app.use(morgan('combined'));

//temples engine
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
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
