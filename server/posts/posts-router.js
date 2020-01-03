const express = require('express');

const router = express.Router();

const restricted = require('../auth/authenticate-middleware');

//GET /api/posts
router.get('/', restricted, (req, res) => {
    Posts.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log("Error GET /api/posts", error);
            res.status(500).json({error: "The posts information could not be retrieved."})
        });
});

//POST /api/posts
router.post('/', restricted, (req, res) => {
    const postData = req.body;
    if(!postData.title || !postData.contents){
        res.status(400).json({ errorMessage: "Please provide title and contents for the post."})
    }else {
    Posts.insert(postData)
        .then(postData => {
            res.status(201).json(postData);
        })
        .catch(error => {
            console.log("POST error /api/posts", error);
            res.status(500)
                .json({ error: "There was an error while saving the post to the database"})
        });
    }
});

//POST /api/posts/:id/comments
router.post('/:id/comments', restricted, (req, res) => {
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

//GET /api/posts/:id
router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Posts.findById(id)
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

//GET /api/posts/:id/comments
router.get('/:id/comments', restricted, (req, res) => {
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

//PUT /api/posts/:id
router.put('/:id', restricted, (req, res) => {
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

//DELETE /api/posts/:id
router.delete('/:id', restricted, (req, res) => {
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