const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('locations of the simpsons')
});

module.exports = router;
