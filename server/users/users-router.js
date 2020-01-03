const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/authenticate-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => res.send(err))
})

// Do we need this endpoint to be restricted? 
// I'd imagine we're trying to register a new user with this endpoint.
router.put('/:id', restricted, (req, res) => {
    const payload = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        date: req.body.date,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        gender: req.body.gender,
        dob: req.body.dob,
        avatar: req.body.avatar,
        bio: req.body.bio,
        portfolioSize: req.body.portfolio-size
    }

})

router.delete('/:id', restricted, (req, res) => {
    // Users.findById(req.params.id) // not sure if this line would work. Should test both.
    db('users')
        .where('id', req.params.id)
        .del()
    res
        .status(204)
        .end()
})

module.exports = router;