const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/authenticate-middleware");

// GET /api/users/  return all users
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//GET a single user by username
router.get('/:username', restricted, (req, res) => {
  Users.findByUserName(req.params.username)
    .then(user => res.json(user))
    .catch(err => res.send(err))
});


//update a user
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
    const updatedUser = Users.update(req.params.id, payload)
        .then(post => {
            res.status(200).json(updatedUser)
        })
        .catch(error => {
            res.send(error)
        })
})


//delete a user
router.delete('/:id', restricted, (req, res) => {
    Users.remove(req.params.id)
    .then(user => {
        if(user > 0) {
            res
            .status(204)
            .end()
        }
    })
    .catch(error => {
        res.json({ errorMessage: error})
    })
})



module.exports = router;





//GET /api/users/:id   get user by id
// router.get('/:id', restricted, (req, res) => {
//     const id = req.params.id;
//     Users.findById(id)
//     .then(user => {
//         res.json(user);
//     })
//     .catch(err => res.send(err));
// });

//edit user

// delete user

// module.exports = router;
