var express = require('express');
var contModel = require('../modules/contacts');
var router = express.Router();
var contact=contModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  contact.exec(function(err,data){
    if(err) throw err;
  res.render('index', { title: 'Express' ,records:data});
});

});
module.exports = router;
