const knex = require("knex");
const config = require("config");
let connectedKnex = {};
// async function delete_all_users() {
//   await connectedKnex.raw("CALL delete_all_users()");
// }

async function get_all_users() {
  const result = await this.connectedKnex.raw("SELECT * FROM get_all_users()");
  return result.rows;
}

async function get_user_by_id(id) {
  const result = await this.connectedKnex.raw(
    "SELECT * FROM get_user_by_id(?)",
    [id]
  );
  return result.rows;
}

async function new_user(new_user_data) {
  const result = await this.connectedKnex.raw(
    "SELECT * FROM new_user(?, ?, ?, ?)",
    [
      new_user_data.username,
      new_user_data.password,
      new_user_data.email,
      new_user_data.role_id,
    ]
  );
  const newUserId = result.rows[0].id; // Assuming the returned column is named 'id'
  return { ...new_user_data, id: newUserId };
}

async function update_user(id, updated_user_data) {
  const result = await this.connectedKnex.raw(
    "SELECT * FROM update_user_details(?, ?, ?, ?, ?)",
    [
      id,
      updated_user_data.username,
      updated_user_data.password,
      updated_user_data.email,
      updated_user_data.role_id,
    ]
  );
  // Process result as needed
  return updated_user_data;
}

async function delete_user(id) {
  await this.connectedKnex.raw("CALL delete_user(?)", [id]);
}

// Export the functions as before
module.exports = {
  connectedKnex,
  get_all_users,
  get_user_by_id,
  new_user,
  update_user,
  delete_user,
  // delete_all_users,
};
