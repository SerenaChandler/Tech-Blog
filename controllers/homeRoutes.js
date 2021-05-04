const router = require("express").Router();
const { Comment, Post, User } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            
        ],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id',],
                include: {
                    model: User,
                    attributes: ['name']
                }
            },
        ]
    });

    const posts = postData.map((post) => post.get({plain: true}));

    res.render("homepage", {
        posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
