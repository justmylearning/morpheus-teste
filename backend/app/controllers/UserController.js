const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const UserService = require('../services/UserService.js');
const UserClass = require('../domain/User');

router.get('/api/user', async (req, res) => {
    try{
        const userService = new UserService();
        var users = await userService.getAll();
        res.json(
            {
                "users":users
            }
        );
    }catch(err){
        console.log(err);
        return res.status(500).json(
            {
                status: 500
            }
        );
    }
});

router.post('/api/user', [
    check('name').isString().isLength({min:3})
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try{
        const userService = new UserService();
        const user = new UserClass(req.body.name)
        await userService.create(user);
        res.status(200).json(
            {
                "body":user
            }
        );
    }catch(err){
        console.log(err);
        return res.status(500).json(
            {
                status:500
            }
        );
    }
});



module.exports = router;