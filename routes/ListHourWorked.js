const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/InformationTimeLineStaff', function (req, res, next) {
  res.render('tables', {
    pageTitle: 'TimeLineStaff',
    // path: '/admin',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.ListHourWorked = router;
