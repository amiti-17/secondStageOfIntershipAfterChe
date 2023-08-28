'use strict'
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mycalcexp";

// to run migrations - migrate

module.exports.up = async function (next) {
  mongoose
    .connect(url, {
      user: "username",
      pass: "password",
    }).then(db => {
      const schemaObj = {
        expression: String,
        calculated: String,
        _id: Number,
      };
      const CalcModel = mongoose.model("calc", new Schema(schemaObj));
      return CalcModel.updateMany({expression: /.*/}, {_id: new Date().getTime()}).save();
    }).then(result => {
      console.log(result);
      return
    }).catch(e => console.error(e));
  
  
  next();
}

module.exports.down = function (next) {
  next()
}
