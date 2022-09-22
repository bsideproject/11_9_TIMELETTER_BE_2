const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.post('/',  (req,res) => {
    res.send('reminder');
});