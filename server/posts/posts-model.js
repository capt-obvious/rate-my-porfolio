const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development || process.env(DATABASE_URL));

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
    findPostComments,
    findCommentById,
    insertComment,
  };
  
  function find() {
    return db('posts').select('id', 'title', 'contents', 'date', 'time', 'liked', 'user_id');
  }
  
  function findById(id) {
    return db('posts').where({id})
          .first();
  }
  
  function insert(post) {
    return db('posts')
      .insert(post, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
    }
  
  function update(changes, id) {
    return db('posts')
      .where({id})
      .update(changes);
  }
  
  function remove(id) {
    return db('posts')
      .where({id})
      .del();
  }
  
  function findPostComments(postId) {
    return db('comments')
      .join('posts', 'posts.id', 'post_id')
      .select('comments.*', 'title as post')
      .where('post_id', postId);
  }
  
  function findCommentById(id) {
    return db('comments')
      .join('posts', 'posts.id', 'post_id')
      .select('comments.*', 'title as post')
      .where('comments.id', id);
  }
  
  function insertComment(comment) {
    return db('comments')
      .insert(comment)
      .then(ids => ({ id: ids[0] }));
  }