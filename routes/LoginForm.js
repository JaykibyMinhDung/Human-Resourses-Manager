const path = require('path');

const express = require('express');

// const rootDir = require('./util/path');

const router = express.Router();

router.get('/login', function (req, res, next) {
  res.render('login', {
    pageTitle: 'login',
    path: '/login',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.routes = router;
