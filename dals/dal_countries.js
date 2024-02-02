const knex = require("knex");
const config = require("config");

let connectedKnex = {};

// async function delete_all_countries() {
//   await connectedKnex.raw("CALL delete_all_countries()");
// }

async function get_all_countries() {
  const result = await connectedKnex.raw("SELECT * FROM get_all_countries()");
  return result.rows;
}

async function get_country_by_id(id) {
  const result = await connectedKnex.raw("SELECT * FROM get_country_by_id(?)", [
    id,
  ]);
  return result.rows;
}

async function new_country(new_country_data) {
  const result = await connectedKnex.raw("SELECT * FROM new_country(?)", [
    new_country_data.name,
  ]);
  const newCountryId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_country_data, id: newCountryId };
}

async function update_country(id, updated_country_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM update_country_details(?, ?)",
    [id, updated_country_data.name]
  );
  // Process result as needed, depending on what update_country_details returns
  return updated_country_data;
}

async function delete_country(id) {
  await connectedKnex.raw("CALL delete_country(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_countries,
  get_country_by_id,
  new_country,
  update_country,
  delete_country,
  // delete_all_countries,
};
