// Import DAL functions
const dal_airlines = require("../dals/dal_airlines");
const dal_countries = require("../dals/dal_countries");
const dal_customers = require("../dals/dal_customers");
const dal_flights = require("../dals/dal_flights");
const dal_roles = require("../dals/dal_roles");
const dal_tickets = require("../dals/dal_tickets");
const dal_users = require("../dals/dal_users");
const knex = require("knex");
const config = require("config");

function setDbConnection() {
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
  // let connectedKnex = knex({
  //   client: "pg",
  //   version: "16",
  //   connection: {
  //     host: config.db_cloud.host,
  //     user: config.db_cloud.user,
  //     password: config.db_cloud.password,
  //     database: config.db_cloud.database,
  //     ssl: true,
  //   },
  // });
  // dal_airlines.connectedKnex = connectedKnex;
  // dal_countries.connectedKnex = connectedKnex;
  // dal_customers.connectedKnex = connectedKnex;
  // dal_flights.connectedKnex = connectedKnex;
  // dal_roles.connectedKnex = connectedKnex;
  // dal_tickets.connectedKnex = connectedKnex;
  // dal_users.connectedKnex = connectedKnex;
}
// function setDbTestConnection() {
// let connectedKnexTest = knex({
//   client: "pg",
//   version: "16",
//   connection: {
//     host: config.db_cloud_test.host,
//     user: config.db_cloud_test.user,
//     password: config.db_cloud_test.password,
//     database: config.db_cloud_test.database,
//     ssl: true,
//   },
// });
// dal_airlines.connectedKnex = connectedKnexTest;
//   dal_countries.connectedKnex = connectedKnexTest;
//   dal_customers.connectedKnex = connectedKnexTest;
//   dal_flights.connectedKnex = connectedKnexTest;
//   dal_roles.connectedKnex = connectedKnexTest;
//   dal_tickets.connectedKnex = connectedKnexTest;
//   dal_users.connectedKnex = connectedKnexTest;
// }

// Airlines
async function getAllAirlinesBL() {
  //console.log(connectedKnex);
  //dal_airlines.connectedKnex = connectedKnex;
  return await dal_airlines.get_all_airlines();
}

async function getAirlineByIdBL(id) {
  return await dal_airlines.get_airline_by_id(id);
}

async function newAirlineBL(new_airline_data) {
  const existingAirline = await dal_airlines.get_airline_by_id(
    new_airline_data.airline_id
  );
  if (existingAirline) {
    return existingAirline;
  } else {
    return await dal_airlines.new_airline(new_airline_data);
  }
}

async function updateAirlineBL(id, updated_airline_data) {
  const airline = await dal_airlines.get_airline_by_id(id);
  if (airline) {
    return await dal_airlines.update_airline(id, updated_airline_data);
  } else {
    throw new Error(`Airline with ID ${id} not found.`);
  }
}

async function deleteAirlineBL(id) {
  const airline = await dal_airlines.get_airline_by_id(id);
  if (airline) {
    return await dal_airlines.delete_airline(id);
  } else {
    throw new Error(`Airline with ID ${id} not found.`);
  }
}

// Countries
async function getAllCountriesBL() {
  return await dal_countries.get_all_countries();
}

async function getCountryByIdBL(id) {
  return await dal_countries.get_country_by_id(id);
}

async function newCountryBL(new_country_data) {
  const existingCountry = await dal_countries.get_country_by_id(
    new_country_data.country_id
  );
  if (existingCountry) {
    return existingCountry;
  } else {
    return await dal_countries.new_country(new_country_data);
  }
}

async function updateCountryBL(id, updated_country_data) {
  const country = await dal_countries.get_country_by_id(id);
  if (country) {
    return await dal_countries.update_country(id, updated_country_data);
  } else {
    throw new Error(`Country with ID ${id} not found.`);
  }
}

async function deleteCountryBL(id) {
  const country = await dal_countries.get_country_by_id(id);
  if (country) {
    return await dal_countries.delete_country(id);
  } else {
    throw new Error(`Country with ID ${id} not found.`);
  }
}

// async function deleteAllCountriesBL() {
//   return await dal_countries.delete_all_countries();
// }

//Customers

// Retrieves all customers.
async function getAllCustomersBL() {
  return await dal_customers.get_all_customers();
}

// Retrieves a single customer by ID.
async function getCustomerByIdBL(id) {
  return await dal_customers.get_customer_by_id(id);
}

// Creates a new customer if they do not already exist.
async function newCustomerBL(new_customer_data) {
  const existingCustomer = await dal_customers.get_customer_by_id(
    new_customer_data.customer_id
  );
  if (existingCustomer) {
    return existingCustomer;
  } else {
    return await dal_customers.new_customer(new_customer_data);
  }
}

// Updates an existing customer by ID.
async function updateCustomerBL(id, updated_customer_data) {
  const customer = await dal_customers.get_customer_by_id(id);
  if (customer) {
    return await dal_customers.update_customer(id, updated_customer_data);
  } else {
    throw new Error(`Customer with ID ${id} not found.`);
  }
}

// Deletes an existing customer by ID.
async function deleteCustomerBL(id) {
  const customer = await dal_customers.get_customer_by_id(id);
  if (customer) {
    return await dal_customers.delete_customer(id);
  } else {
    throw new Error(`Customer with ID ${id} not found.`);
  }
}

// Flights
async function getAllFlightsBL() {
  return await dal_flights.get_all_flights();
}

async function getFlightByIdBL(id) {
  return await dal_flights.get_flight_by_id(id);
}

async function newFlightBL(new_flight_data) {
  const existingFlight = await dal_flights.get_flight_by_id(
    new_flight_data.flight_id
  );
  if (existingFlight) {
    return existingFlight;
  } else {
    return await dal_flights.new_flight(new_flight_data);
  }
}

async function updateFlightBL(id, updated_flight_data) {
  const flight = await dal_flights.get_flight_by_id(id);
  if (flight) {
    return await dal_flights.update_flight(id, updated_flight_data);
  } else {
    throw new Error(`Flight with ID ${id} not found.`);
  }
}

async function deleteFlightBL(id) {
  const flight = await dal_flights.get_flight_by_id(id);
  if (flight) {
    return await dal_flights.delete_flight(id);
  } else {
    throw new Error(`Flight with ID ${id} not found.`);
  }
}

// Roles
async function getAllRolesBL() {
  return await dal_roles.get_all_roles();
}

async function getRoleByIdBL(id) {
  return await dal_roles.get_role_by_id(id);
}

async function newRoleBL(new_role_data) {
  const existingRole = await dal_roles.get_role_by_id(new_role_data.role_id);
  if (existingRole) {
    return existingRole;
  } else {
    return await dal_roles.new_role(new_role_data);
  }
}

async function updateRoleBL(id, updated_role_data) {
  const role = await dal_roles.get_role_by_id(id);
  if (role) {
    return await dal_roles.update_role(id, updated_role_data);
  } else {
    throw new Error(`Role with ID ${id} not found.`);
  }
}

async function deleteRoleBL(id) {
  const role = await dal_roles.get_role_by_id(id);
  if (role) {
    return await dal_roles.delete_role(id);
  } else {
    throw new Error(`Role with ID ${id} not found.`);
  }
}

// Tickets
async function getAllTicketsBL() {
  return await dal_tickets.get_all_tickets();
}

async function getTicketByIdBL(id) {
  return await dal_tickets.get_ticket_by_id(id);
}

async function newTicketBL(new_ticket_data) {
  const existingTicket = await dal_tickets.get_ticket_by_id(
    new_ticket_data.ticket_id
  );
  if (existingTicket) {
    return existingTicket;
  } else {
    return await dal_tickets.new_ticket(new_ticket_data);
  }
}

async function updateTicketBL(id, updated_ticket_data) {
  const ticket = await dal_tickets.get_ticket_by_id(id);
  if (ticket) {
    return await dal_tickets.update_ticket(id, updated_ticket_data);
  } else {
    throw new Error(`Ticket with ID ${id} not found.`);
  }
}

async function deleteTicketBL(id) {
  const ticket = await dal_tickets.get_ticket_by_id(id);
  if (ticket) {
    return await dal_tickets.delete_ticket(id);
  } else {
    throw new Error(`Ticket with ID ${id} not found.`);
  }
}

// Users
async function getAllUsersBL() {
  return await dal_users.get_all_users();
}

async function getUserByIdBL(id) {
  return await dal_users.get_user_by_id(id);
}

async function newUserBL(new_user_data) {
  const existingUser = await dal_users.get_user_by_id(new_user_data.user_id);
  if (existingUser) {
    return existingUser;
  } else {
    return await dal_users.new_user(new_user_data);
  }
}

async function updateUserBL(id, updated_user_data) {
  const user = await dal_users.get_user_by_id(id);
  if (user) {
    return await dal_users.update_user(id, updated_user_data);
  } else {
    throw new Error(`User with ID ${id} not found.`);
  }
}

async function deleteUserBL(id) {
  const user = await dal_users.get_user_by_id(id);
  if (user) {
    return await dal_users.delete_user(id);
  } else {
    throw new Error(`User with ID ${id} not found.`);
  }
}

// Export the BL functions
module.exports = {
  setDbConnection,
  // setDbTestConnection,
  getAllAirlinesBL,
  getAirlineByIdBL,
  newAirlineBL,
  updateAirlineBL,
  deleteAirlineBL,
  //   deleteAllAirlinesBL,
  getAllCountriesBL,
  getCountryByIdBL,
  newCountryBL,
  updateCountryBL,
  deleteCountryBL,
  //   deleteAllCountriesBL,
  getAllCustomersBL,
  getCustomerByIdBL,
  newCustomerBL,
  updateCustomerBL,
  deleteCustomerBL,
  getAllFlightsBL,
  getFlightByIdBL,
  newFlightBL,
  updateFlightBL,
  deleteFlightBL,
  getAllRolesBL,
  getRoleByIdBL,
  newRoleBL,
  updateRoleBL,
  deleteRoleBL,
  getAllTicketsBL,
  getTicketByIdBL,
  newTicketBL,
  updateTicketBL,
  deleteTicketBL,
  getAllUsersBL,
  getUserByIdBL,
  newUserBL,
  updateUserBL,
  deleteUserBL,
};
