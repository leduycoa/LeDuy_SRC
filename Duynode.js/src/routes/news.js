const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/NewsController');

//newsConTroller.index

router.get('/:slug', newscontroller.show);
router.get('/', newscontroller.index);

module.exports = router;
