const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

<<<<<<< HEAD
=======
// Set up a route called /api/comments/:pizzaId and use the addComment() method as a POST callback. Then set up another route for /api/comments/:pizzaId/:commentId and use the removeComment method as a DELETE callback.

>>>>>>> 77b5a8850a3426a8aa9b53955ea2093fd0dab9b9
// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
