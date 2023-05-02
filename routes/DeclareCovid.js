const path = require('path');

const express = require('express');

// const rootDir = require('./util/path');

const router = express.Router();

router.get('/formCovid', function (req, res, next) {
  res.render('formCovid', {
    pageTitle: 'covid_19',
    // path: '/admin',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.formCovid = router;
