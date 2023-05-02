const express = require('express');

// const loginpage = require("./views/login.ejs");

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

// const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
/*
html
*/
const Loginform = require('./routes/LoginForm');
const DeclareCovid = require('./routes/DeclareCovid');
const ListHour = require('./routes/ListHourWorked');
const Attendance = require('./routes/AttendanceCheck');
const inforstaff = require('./routes/inforPersonal');

app.get('/test', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'test.html'));
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Ejs

app.use(Loginform.routes);
app.use(DeclareCovid.formCovid);
app.use(ListHour.ListHourWorked);
app.use(Attendance.AttendanceCheck);
app.use(inforstaff.informationStaff);

app.set('view engine', 'ejs'); //Sử dụng view làm view engine
app.set('views', 'views'); //Thư mục views nằm cùng cấp với file app.js

app.listen(8090);
