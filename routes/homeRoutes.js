const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home',
        path: '/'
    });
});
router.get('/about', (req, res, next) => {
    res.render('about', {
        pageTitle: 'About Conference',
        path: '/about'
    });
})
router.get('/speakers', (req, res, next) => {
    res.render('speakers', {
        pageTitle: 'Speakers',
        path: '/speakers'
    });
})

exports.router = router;