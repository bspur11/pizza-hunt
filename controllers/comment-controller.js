const {
  Comment,
  Pizza
} = require('../models');

// We're also returning the pizza Promise here so that we can do something with the results of the Mongoose operation. Again, because we passed the option of new: true, we're receiving back the updated pizza (the pizza with the new comment included)

const commentController = {
  // add comment to pizza
  addComment({
    params,
    body
  }, res) {
    console.log(body);
    Comment.create(body)
      .then(({
        _id
      }) => {
        return Pizza.findOneAndUpdate({
          _id: params.pizzaId
        }, {
          $push: {
            comments: _id
          }
        }, {
          new: true
        });
      })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({
            message: 'No pizza found with this id!'
          });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },


  // remove comment 18.2.5
  removeComment({
    params
  }, res) {
    Comment.findOneAndDelete({
        _id: params.commentId
      })
      .then(deletedComment => {
        if (!deletedComment) {
          return res.status(404).json({
            message: 'No comment with this id!'
          });
        }
        return Pizza.findOneAndUpdate({
          _id: params.pizzaId
        }, {
          $pull: {
            comments: params.commentId
          }
        }, {
          new: true
        });
      })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({
            message: 'No pizza found with this id!'
          });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = commentController;