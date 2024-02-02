const knex = require("knex");
const config = require("config");
let connectedKnex = {};


// async function delete_all_roles() {
//   await connectedKnex.raw("CALL delete_all_roles()");
// }

async function get_all_roles() {
  const result = await connectedKnex.raw("SELECT * FROM get_all_roles()");
  return result.rows;
}

async function get_role_by_id(id) {
  const result = await connectedKnex.raw("SELECT * FROM get_role_by_id(?)", [
    id,
  ]);
  return result.rows;
}

async function new_role(new_role_data) {
  const result = await connectedKnex.raw("SELECT * FROM new_role(?)", [
    new_role_data.role_name,
  ]);
  const newRoleId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_role_data, id: newRoleId };
}

async function update_role(id, updated_role_data) {
  const result = await connectedKnex.raw(
    "SELECT * FROM update_role_details(?, ?)",
    [id, updated_role_data.role_name]
  );
  // Process result as needed
  return updated_role_data;
}

async function delete_role(id) {
  await connectedKnex.raw("CALL delete_role(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_roles,
  get_role_by_id,
  new_role,
  update_role,
  delete_role,
  // delete_all_roles,
};
