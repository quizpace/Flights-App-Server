const knex = require("knex");
const config = require("config");
let connectedKnex = {};

// async function delete_all_customers() {
//   await connectedKnex.raw("CALL delete_all_customers()");
// }

async function get_all_customers() {
  const result = await connectedKnex.raw("SELECT * FROM get_all_customers()");
  return result.rows;
}

async function get_customer_by_id(id) {
  const result = await connectedKnex.raw(
    "SELECT * FROM get_customer_by_id(?)",
    [id]
  );
  return result.rows;
}

async function new_customer(new_customer_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM new_customer(?, ?, ?, ?, ?, ?)",
    [
      new_customer_data.first_name,
      new_customer_data.last_name,
      new_customer_data.address,
      new_customer_data.ph_number,
      new_customer_data.credit_card_no,
      new_customer_data.user_id,
    ]
  );
  const newCustomerId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_customer_data, id: newCustomerId };
}

async function update_customer(id, updated_customer_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM update_customer_details(?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      updated_customer_data.first_name,
      updated_customer_data.last_name,
      updated_customer_data.address,
      updated_customer_data.ph_number,
      updated_customer_data.credit_card_no,
      updated_customer_data.user_id,
    ]
  );
  // Process result as needed
  return updated_customer_data;
}

async function delete_customer(id) {
  await connectedKnex.raw("CALL delete_customer(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_customers,
  get_customer_by_id,
  new_customer,
  update_customer,
  delete_customer,
  // delete_all_customers,
};
