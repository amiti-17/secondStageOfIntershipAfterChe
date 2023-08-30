'use strict'
// const knex = require("knex");


module.exports.up = async function (next) {
  // try {
  //   const myKnex = knex<HistoryType>({
  //     client: 'pg',
  //     connection: {
  //       host : process.env.POSTGRES_HOST,
  //       port : Number(process.env.POSTGRES_PORT),
  //       user : process.env.POSTGRES_USER,
  //       password : process.env.POSTGRES_PWD,
  //       database : process.env.DB,
  //     }
  //   }) 
    
  //   return myKnex;
  // } catch (error) {
  //   console.error(error);
  //   next(error);
  // }
  next();
}

module.exports.down = function (next) {
  next()
}
