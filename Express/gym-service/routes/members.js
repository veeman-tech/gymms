var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let jsonResponse={
        "data":[
            { name:"Member 1"},
        {name:"Member 2"}
    ]
    };
  res.json(jsonResponse);
});

module.exports = router;
