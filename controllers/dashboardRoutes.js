const router = require('express').Router();
const { Comment, Post, User } = require('../models');

const withAuth = require('../utils/auth');

// router.get("/", (req, res) =>  {
//     res.render("dashboard")
// })


// module.exports = router;

router.get("/", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (!req.session.logged_in) {
      res.redirect("/login");
      return;
    }
  
    res.render("dashboard");
  });

  module.exports = router;