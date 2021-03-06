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

router.get('/:username', restricted, (req, res) => {
  Users.findByUserName(req.params.username)
    .then(user => res.json(user))
    .catch(err => res.send(err))
});
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
