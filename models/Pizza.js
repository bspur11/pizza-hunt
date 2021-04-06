const dateFormat = require('../utils/dateFormat');

const {
  Schema,
  model
} = require('mongoose');

// 18.1.5
// Install Mongoose and Create the Pizza Model

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },

// If we navigate to the utils directory, we'll find a file called dateFormat.js that exports a function. This function will format the timestamp for us and return us one ready to display. Since it's already here, we should use that!

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  size: {
    type: String,
    default: 'Large'
  },

  toppings: [],

  // 18.2.4 add comments array

  comments: [{
    type: Schema.Types.ObjectId,
    //  ref is reference. tells model whech documents to search//
    ref: 'Comment'
  }]

},

// tell the schema that it can use virtuals.
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// create the Pizza model using the PizzaSchema 18.1.5
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;