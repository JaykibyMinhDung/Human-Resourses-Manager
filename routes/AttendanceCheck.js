const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/Check_In_Out', function (req, res, next) {
  res.render('attendance', {
    pageTitle: 'attendance',
    // path: '/admin',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.AttendanceCheck = router;
