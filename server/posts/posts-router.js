const express = require('express');

const router = express.Router();

const restricted = require('../auth/authenticate-middleware');
const Posts = require('../posts/posts-model');
const Users = require('../users/users-model');

//GET /api/users/:id/posts  get all posts by user
router.get('/:id/posts', restricted, (req, res) => {
    Posts.find(req.query)
    const id = req.params.id;
    Posts.findUserPosts(id)
    .then(post => {
        if(post.length){
        res.status(200).json(post);
        }else {
            res.status(404).json({message: "The post with the specified ID does not exist."})
        }
    })
    .catch(error => {
        console.log("Error on GET /api/users/:id/posts", error);
        res.status(500).json({error: "The post information could not be retrieved."})
    })
  
})

//GET /api/users/:id/posts/:id   get user's post by post id
router.get('/:id/posts/:id', restricted, (req, res) => {
    const id = req.params.id;
    Posts.findPostsById(id)
        .then(post => {
            if(post.length) {
                res.status(200).json(post);
            }else{
                res.status(404).json({ message: "The post with the specified ID does not exist."})
            }
        })
        .catch(error => {
            console.log("Error on GET api/posts/:id", error);
            res.status(500).json({error: "The post information could not be retrieved."})
        })
    
})

//GET /api/users/posts  get all posts
router.get('/posts', restricted, (req, res) => {
    Posts.find(req.query)
        .then(posts => {
            if(this.post.length){
                res.status(200).json(posts);
            }else{
                res.status(404).json({ message: "Error fetching posts."})
            }
        })
        .catch(error => {
            console.log("Error on GET api/posts/:id", error);
            res.status(500).json({error: "The posts could not be retrieved."})
        })
})

//POST /api/users/:id/posts   add new post 
router.post('/:id/posts', restricted, (req, res) => {
    const postData = req.body;
    if(!postData.title || !postData.contents){
        res.status(400).json({ errorMessage: "Please provide title and contents for the post."})
    }else {
    Posts.insert(postData)
        .then(postData => {
            res.status(201).json(postData);
        })
        .catch(error => {
            console.log("POST error /api/users/:id/posts", error);
            res.status(500)
                .json({ error: "There was an error while saving the post to the database"})
        });
    }
});

//POST /api/users/:id/posts/:id/comments
router.post('/:id/posts/:id/comments', restricted, (req, res) => {
    const commentData = req.body;
    if(!commentData.text){
        res.status(400).json({errorMessage: "Please provide text for the comment."})
    }else {
    Posts.insertComment(commentData)
        .then(commentData => {
            res.status(201).json(commentData)
        })
        .catch(error => {
            console.log("error adding comment", error);
            res.status(500).json({error: "There was an error while saving the comment to the database"})
        })
    } 
})



//GET /api/users/:id/posts/:id/comments
router.get('/:id/posts/:id/comments', restricted, (req, res) => {
    const id = req.params.id;
    Posts.findCommentById(id)
    .then(comments => {
        if(comments.length){
        res.status(200).json(comments);
        }else {
            res.status(404).json({message: "The post with the specified ID does not exist."})
        }
    })
    .catch(error => {
        console.log("Error on GET api/posts/:id/comments", error);
        res.status(500).json({error: "The comments information could not be retrieved."})
    })
  
})

//PUT /api/users/:id/posts/:id
router.put('/:id/posts/:id', restricted, (req, res) => {
    const item = req.body;
    const id = req.params.id;
    
    if(!item.title || !item.contents){
        res.status(404).json({errorMessage: "Please provide title and contents for the post."})
    }else {
        Posts.update(id, item)
            .then(post => {
                if(post){
                    res.status(200).json({...item, id: req.params.id})
                }else {
                    res.status(404).json({message: "The post with the specified ID does not exist."})
                }
            })
            .catch(error => {
                console.log("Error on PUT api/posts/:id", error)
                res.status(500).json({error: "The post information could not be modified."})
            });
    };
});  

//DELETE /api/users/:id/posts/:id
router.delete('/:id/posts/:id', restricted, (req, res) => {
    const id = req.params.id;
    Posts.remove(id)
        .then(item => {
            if(!item){
                res.send(404).json({message: "The post with the specified ID does not exist." })
            } else{
                res.status(200).json({message: "Removed post"})
                    .catch(error => {
                        console.log("There was an error on DELETE /api/posts/:id", error);
                        res.status(500).json({error: "The post could not be removed"})
                    })
            }
        })
});



module.exports = router;