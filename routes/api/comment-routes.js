const router = require('express').Router();
const {addComment, removeComment} = require('../../controllers/comment-controller');

// Set up a route called /api/comments/:pizzaId and use the addComment() method as a POST callback. Then set up another route for /api/comments/:pizzaId/:commentId and use the removeComment method as a DELETE callback.

// /api/comments/<pizzaId> 18.2.6
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;
