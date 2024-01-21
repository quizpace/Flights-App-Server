const knex = require("knex");
const config = require("config");
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


async function delete_all_flights() {
  await connectedKnex.raw("CALL delete_all_flights()");
}

async function get_all_flights() {
  const result = await connectedKnex.raw("SELECT * FROM get_all_flights()");
  return result.rows;
}

async function get_flight_by_id(id) {
  const result = await connectedKnex.raw("SELECT * FROM get_flight_by_id(?)", [
    id,
  ]);
  return result.rows;
}

async function new_flight(new_flight_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM new_flight(?, ?, ?, ?, ?, ?)",
    [
      new_flight_data.airline_id,
      new_flight_data.origin_country_id,
      new_flight_data.destination_country_id,
      new_flight_data.departure_time,
      new_flight_data.landing_time,
      new_flight_data.remaining_tickets,
    ]
  );
  const newFlightId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_flight_data, id: newFlightId };
}

async function update_flight(id, updated_flight_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM update_flight_details(?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      updated_flight_data.airline_id,
      updated_flight_data.origin_country_id,
      updated_flight_data.destination_country_id,
      updated_flight_data.departure_time,
      updated_flight_data.landing_time,
      updated_flight_data.remaining_tickets,
    ]
  );
  // Process result as needed
  return updated_flight_data;
}

async function delete_flight(id) {
  await connectedKnex.raw("CALL delete_flight(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_flights,
  get_flight_by_id,
  new_flight,
  update_flight,
  delete_flight,
  delete_all_flights,
};
