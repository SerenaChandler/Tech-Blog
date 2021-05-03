const router = require('express').Router();
const { User } = require('../../models');
const sequelize = require('../config/connection');

router.get("/", (req, res) =>  {
    res.render("homepage")
})