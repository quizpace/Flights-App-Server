const knex = require("knex");
const config = require("config");

function database() {
  let connectedKnex = knex({
    client: "pg",
    version: "16",
    connection: {
      host: config.db_cloud.host,
      user: config.db_cloud.user,
      password: config.db_cloud.password,
      database: config.db_cloud.database,
      ssl: true,
    },
  });
  return connectedKnex;
}

function databseTests() {
  let connectedKnexTest = knex({
    client: "pg",
    version: "16",
    connection: {
      host: config.db_cloud_test.host,
      user: config.db_cloud_test.user,
      password: config.db_cloud_test.password,
      database: config.db_cloud_test.database,
      ssl: true,
    },
  });
  return connectedKnex;
}
module.exports = { database, databseTests };
