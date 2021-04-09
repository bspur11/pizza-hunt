const dateFormat = require('../utils/dateFormat');

const {
  Schema,
  model
} = require('mongoose');

// 18.1.5
// Install Mongoose and Create the Pizza Model
// 18.5.3 validation required and trim

//  required field option in Mongoose is set to true, it will require data to exist for that field. Also notice the trim option that's been added, which works just like the JavaScript .trim() method and removes white space before and after the input string

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
    required: 'You need to name your pizza!!!',
    trim: true
  },
  createdBy: {
    type: String,
    required: 'Please tell us who you are.',
    trim: true
  },

// If we navigate to the utils directory, we'll find a file called dateFormat.js that exports a function. This function will format the timestamp for us and return us one ready to display. Since it's already here, we should use that!

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  size: {
    type: String,
    required: true,
    enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
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