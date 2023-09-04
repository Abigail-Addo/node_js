const express = require('express');
const router = express.Router();
const login = require('../controllers/login');

router.post('/auth', async (req, res) => {
  await  login.loginUser(req, res);
})


router.get('/', async (req, res) => {
    await res.json({message :  "api is working perfectly"})
})


module.exports = router;