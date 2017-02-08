/**
 * Created by sergey on 08.02.2017.
 */
const router = require('express').Router();

router.get('',function (req,res) {
    res.send('Hello World!');
});

module.exports = router;
