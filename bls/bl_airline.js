// Import DAL functions
const dal_airlines = require("./dals/dal_airlines");
const dal_countries = require("./dals/dal_countries");
const dal_customers = require("./dals/dal_customers");
const dal_flights = require("./dals/dal_flights");
const dal_roles = require("./dals/dal_roles");
const dal_tickets = require("./dals/dal_tickets");
const dal_users = require("./dals/dal_users");

// Airlines
async function getAllAirlinesBL() {
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

// Tickets לבדוק אם שייך ליוזר ולאפשר רק ליוזרים של אותה החברה
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

// Users לבדוק אם שייך ליוזר ולאפשר רק ליוזרים של אותה החברה
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
  connectedKnex,
  getAllAirlinesBL,
  getAirlineByIdBL,
  newAirlineBL,
  updateAirlineBL,
  deleteAirlineBL,
  getAllCountriesBL,
  getCountryByIdBL,
  newCountryBL,
  updateCountryBL,
  deleteCountryBL,
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
