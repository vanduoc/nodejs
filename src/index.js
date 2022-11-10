const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
var methodOverride = require('method-override');
const morgan = require('morgan');
const route = require('./routes');
const app = express();
const port = 3001;

const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

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

// use custom sort middleware
app.use(sortMiddleware);

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        let sortType = field === sort.column ? sort.type : 'default';

        const icons = {
          default: 'funnel-outline',
          asc: 'chevron-up-circle-outline',
          desc: 'chevron-down-circle-outline',
        };

        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'asc',
        };

        let icon = icons[sortType];
        const type = types[sortType];

        return `<a href="?_sort&column=${field}&type=${type}">
                  <ion-icon name="${icon}"></ion-icon>
                </a>`;
      },
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
