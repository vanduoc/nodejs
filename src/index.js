const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
var methodOverride = require('method-override');
const morgan = require('morgan');
const route = require('./routes');
const app = express();
const port = 3001;

const db = require('./config/db');

//connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Xử lý dữ liệu gửi lên server khi submit từ form lên// thư viện body-parser/ đưa dữ liệu vào body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Xử lý dữ liệu truyền lên server khi dùng fetch, axio, XMLHttpRequest...
app.use(express.json());

// HTTP request logger middleware for node.js
// app.use(morgan('combined'));

//Lets we use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOverride('_method'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
