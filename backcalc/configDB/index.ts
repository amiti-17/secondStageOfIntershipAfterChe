
const configDB = {
  mongo: "mongo",
  postgres: "postgres",
  mode: process.env.DB_MODE || "postgres",
}

export default configDB;