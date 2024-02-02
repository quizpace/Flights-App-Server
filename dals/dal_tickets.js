const knex = require("knex");
const config = require("config");
let connectedKnex = {};


// async function delete_all_tickets() {
//   await connectedKnex.raw("CALL delete_all_tickets()");
// }

async function get_all_tickets() {
  const result = await this.connectedKnex.raw("SELECT * FROM get_all_tickets()");
  return result.rows;
}

async function get_ticket_by_id(id) {
  const result = await this.connectedKnex.raw("SELECT * FROM get_ticket_by_id(?)", [
    id,
  ]);
  return result.rows;
}

async function new_ticket(new_ticket_data) {
  const result = await this.connectedKnex.raw("SELECT * FROM new_ticket(?, ?)", [
    new_ticket_data.flight_id,
    new_ticket_data.customer_id,
  ]);
  const newTicketId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_ticket_data, id: newTicketId };
}

async function update_ticket(id, updated_ticket_data) {
  const result = await this.connectedKnex.raw(
    "SELECT * FROM update_ticket_details(?, ?, ?)",
    [id, updated_ticket_data.flight_id, updated_ticket_data.customer_id]
  );
  // Process result as needed
  return updated_ticket_data;
}

async function delete_ticket(id) {
  await this.connectedKnex.raw("CALL delete_ticket(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_tickets,
  get_ticket_by_id,
  new_ticket,
  update_ticket,
  delete_ticket,
  // delete_all_tickets,
};
