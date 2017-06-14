var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "number6",
    database: "testdb"
  }
});

module.exports = knex;
