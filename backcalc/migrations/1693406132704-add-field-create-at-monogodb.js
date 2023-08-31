'use strict'
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mycalcexp";

const schemaObj = {
  expression: { type: String, required: true },
  calculated: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
};

module.exports.up = function (next) {

  return mongoose.connect(url,  {
    user: "username",
    pass: "password",
  }).then(db => {
    return db.model("calc", new mongoose.Schema(schemaObj));
  });
  // .then(Model => {
  //   if (!Model.findOne()) {

  //   }
  // })

  next();
}

module.exports.down = function (next) {
  next()
}
