var express = require('express');
var router = express.Router();
var kodepos = require('../controller/kodepos');

router.get('/:id', kodepos.getKodePos);

module.exports = router;