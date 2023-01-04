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
router.get('/venue', (req, res, next) => {
    res.render('venue', {
        pageTitle: 'Venue',
        path: '/venue'
    });
})
router.get('/sponsorship', (req, res, next) => {
    res.render('sponsorship', {
        pageTitle: 'Sponsorship',
        path: '/sponsorship'
    });
})
router.get('/callForPaper', (req, res, next) => {
    res.render('callForPaper', {
        pageTitle: 'Call For Paper',
        path: '/callForPaper'
    });
})
router.get('/paperSubmission', (req, res, next) => {
    res.render('callForPaper', {
        pageTitle: 'Paper Submission',
        path: '/paperSubmission'
    });
})
router.get('/sessions', (req, res, next) => {
    res.render('sessions', {
        pageTitle: 'Sessions',
        path: '/sessions'
    });
})
router.get('/publications', (req, res, next) => {
    res.render('sessions', {
        pageTitle: 'Publications',
        path: '/publications'
    });
})
router.get('/steeringCommittee', (req, res, next) => {
    res.render('steering-committee', {
        pageTitle: 'Steering Committee',
        path: '/committee'
    });
})
router.get('/technicalCommittee', (req, res, next) => {
    res.render('technical-committee', {
        pageTitle: 'Technical Program Committee',
        path: '/committee'
    });
})
router.get('/advisoryCommittee', (req, res, next) => {
    res.render('advisory-committee', {
        pageTitle: 'Advisory Committee',
        path: '/committee'
    });
})

exports.router = router;