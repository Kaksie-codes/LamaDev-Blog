const { Router } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt')

// initialize the router
const router = Router();


//register
router.post('/register', async(req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err);
    }
} )

//LOGIN
router.post('/login', async(req, res) => {
    try{
       const user = await User.findOne({username: req.body.username});
        if(!user){
            return res.status(400).json('user does not exist')
        }
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated){
            return res.status(400).json('incorrect password')
        }

        //prevent the user from acessing the password
        const { password, ...others } = user._doc;
        return res.status(200).json(others)
    }catch(err){
        return res.status(500).json(err);
    }
} )

module.exports = router;