const knex = require("knex");
const config = require("config");
const blAdmin = require("../bls/bl_admin");
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

// async function delete_all_airlines() {
//   await connectedKnex.raw("CALL delete_all_airlines()");
// }

async function get_all_airlines() {
  const result = await connectedKnex.raw("SELECT * FROM get_all_airlines()");
  return result.rows;
}

async function get_airline_by_id(id) {
  const result = await connectedKnex.raw("SELECT * FROM get_airline_by_id(?)", [
    id,
  ]);
  return result.rows;
}

async function new_airline(new_airline_data) {
  const result = await connectedKnex.raw("SELECT * FROM new_airline(?, ?, ?)", [
    new_airline_data.name,
    new_airline_data.country_id,
    new_airline_data.user_id,
  ]);
  const newAirlineId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_airline_data, id: newAirlineId };
}

async function update_airline(id, updated_airline_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM update_airline_details(?, ?, ?, ?)",
    [
      id,
      updated_airline_data.name,
      updated_airline_data.country_id,
      updated_airline_data.user_id,
    ]
  );
  // Process result as needed
  return updated_airline_data;
}

async function delete_airline(id) {
  await connectedKnex.raw("CALL delete_airline(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_airlines,
  get_airline_by_id,
  new_airline,
  update_airline,
  delete_airline,
  // delete_all_airlines,
};
