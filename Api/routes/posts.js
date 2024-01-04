const { Router } = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');
const { route } = require('./auth');

// initialize the router
const router = Router();


//create Post
router.post('/', async(req, res) => {
    const newPost =  new Post(req.body);

    try{
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
})

//update post
router.put('/:id', async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
                res.status(200).json(updatedPost);
            }catch(err){
                return  res.status(500).json(err);   
            }
        }else{
            return  res.status(401).json('You can only update your post!');
        }
    }catch(err){
      return  res.status(500).json(err);   
    }
} )

//delete user
router.delete('/:id', async(req, res) => {
    if(req.body.userId === req.params.id){ 
        //first of all check for the user and delete all his posts     
        try{
            const user = await User.findById(req.params.id);
            await Post.deleteMany({username: user.username});
            //then delete the user from users
            try{
                const deletedUser = await User.findByIdAndDelete(req.params.id);
                return res.status(200).json({status: 'deleted', file : deletedUser});
            }catch(err){
                res.status(500).json(err);
            }          
        }catch(err){
            res.status(404).json('User not found');
        };
    }else{
        return res.status(401).json('You can only delete your account!');
    }    
} )

//get user
router.get('/:id', async(req, res) => {
    try{
         const user = await User.findById(req.params.id);
         const { password, ...others} = user._doc;     
         return res.status(200).json(others);
    }catch(err){
        res.status(404).json('User not found');
    };   
} )


module.exports = router;