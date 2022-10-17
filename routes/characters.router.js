const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.json([{
    name: 'Homer',
    age: '50'
  },
  {
    name: 'Marge',
    age: '51'
  }
]);
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Homer',
    age: '50'
  });
});

router.post('/',(req,res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router;
