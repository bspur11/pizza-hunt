const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
<<<<<<< HEAD
      type: String,
      required: "Please add your comment."
    },
    writtenBy: {
      type: String,
      required: 'You must leave your name.'
=======
      type: String
    },
    writtenBy: {
      type: String
>>>>>>> 77b5a8850a3426a8aa9b53955ea2093fd0dab9b9
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const CommentSchema = new Schema(
  {
    writtenBy: {
<<<<<<< HEAD
      type: String,
      required: 'Please leave your name.'
    },
    commentBody: {
      type: String,
      required: 'Please leave a comment.'
=======
      type: String
    },
    commentBody: {
      type: String
>>>>>>> 77b5a8850a3426a8aa9b53955ea2093fd0dab9b9
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // use ReplySchema to validate data for a reply
    replies: [ReplySchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

CommentSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;