const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/informationStaff', (req, res, next) => {
  res.render('personalinformation', {
    pageTitlez: 'InformationStaff',
    path: '/',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.informationStaff = router;
