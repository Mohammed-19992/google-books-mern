let db = require("../models");

module.exports = {
    findAll: function(request, respond) {
      db.GoogleBooks
        .find(request.query)
        .sort({ date: -1 })
        .then(dbModel => respond.json(dbModel))
        .catch(error => respond.status(422).json(error));
    },
    findOne: function(request, respond) {
      db.GoogleBooks
        .findOne({id: request.params.id})
        .then(dbModel => respond.json(dbModel))
        .catch(error => respond.status(422).json(error));
    },
    save: function(request, respond) {
      db.GoogleBooks
        .create(request.body)
        .then(dbModel => respond.json(dbModel))
        .catch(error => respond.status(422).json(error));
    },
    remove: function(request, respond) {
      db.GoogleBooks
        .findById({ _id: request.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => respond.json(dbModel))
        .catch(error => respond.status(422).json(error));
    }
  };