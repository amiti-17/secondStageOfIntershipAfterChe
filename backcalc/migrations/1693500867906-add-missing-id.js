'use strict'
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mycalcexp";

const schemaObj = {
  expression: { type: String, required: true },
  calculated: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
};

module.exports.up = async function (next) {
  mongoose.connect(url,  {
    user: "username",
    pass: "password",
  }).then(db => {
    return db.model("calc", new mongoose.Schema(schemaObj));
  }).then(Model => {
    return {data: Model.find(), Model: Model}
  }).then(({data, Model}) => {
    data.forEach(el => {
      el._id = new mongoose.Types.ObjectId()
      (new Model(el)).save()
    })
  })

  next()
}

module.exports.down = function (next) {
  next()
}
