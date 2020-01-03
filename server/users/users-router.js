const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/authenticate-middleware");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:username", (req, res) => {

  Users.findByUserName( req.params.username)
    .then(user => {
        console.log(user)
      return res.json(user);
    })
    .catch(err => res.send(err));
});
module.exports = router;
