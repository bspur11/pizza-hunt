// 18.1.6

const {
  Pizza
} = require('../models');

const pizzaController = {
  const pizzaController = {
    // get all pizzas
    getAllPizza(req, res) {
      Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // get one pizza by id
    getPizzaById({
      params
    }, res) {
      Pizza.findOne({
          _id: params.id
        })
        .then(dbPizzaData => {
          // If no pizza is found, send 404
          if (!dbPizzaData) {
            res.status(404).json({
              message: 'No pizza found with this id!'
            });
            return;
          }
          res.json(dbPizzaData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // createPizza 18.1.6
    createPizza({
      body
    }, res) {
      Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },
  }
};

module.exports = pizzaController;