const assert = require("assert");
const dal_airlines = require("../dals/dal_airlines");
const knex = require("knex");
const config = require("config");
const mode = "test_mode";

describe("Testing functionallity of the DAL", () => {
  beforeEach(() => {
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
    dal_airlines.connectedKnex = connectedKnexTest;
    //   dal_countries.connectedKnex = connectedKnexTest;
    //   dal_customers.connectedKnex = connectedKnexTest;
    //   dal_flights.connectedKnex = connectedKnexTest;
    //   dal_roles.connectedKnex = connectedKnexTest;
    //   dal_tickets.connectedKnex = connectedKnexTest;
    //   dal_users.connectedKnex = connectedKnexTest;
  });
  it("get_all_airlines", async () => {
    const expected = 49;
    const messages = await dal_airlines.get_all_airlines(mode);
    const actual = messages.length;
    console.log(actual);
    assert.strictEqual(expected, actual);
  });
});
