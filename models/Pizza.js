const { Schema, model } = require('mongoose');

// 18.1.5
// Install Mongoose and Create the Pizza Model

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
});

// create the Pizza model using the PizzaSchema 18.1.5
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;