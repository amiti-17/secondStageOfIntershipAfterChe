'use strict'
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mycalcexp";

const schemaObj = {
  expression: String,
  calculated: String,
  _id: Number,
};

module.exports.up = function (next) {

  const db = mongoose.connect(url,  {
    user: "username",
    pass: "password",
  }).then(db => {
    return db.model("calc", new Schema(schemaObj));
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
