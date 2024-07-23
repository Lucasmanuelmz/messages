const { Router} = require('express');

const router  = Router();
const MSG = require('../models/index')

router.get('/new', (req, res) => {
    res.render('form')
})


router.post('/new', (req, res) => {
    let {text, user} = req.body;
    MSG.create({
        text: text,
        user: user
    }).then(() => {
        res.redirect('/')
    }).catch(err => {
        res.redirect('/new')
    })
    
})

router.get('/', (req, res) => {
    MSG.findAll().then(messages => {
         res.render('index', {
        messages
    })
    }).catch( error => {
        res.redirect('/new')
    })
   
})

module.exports = router;