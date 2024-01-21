// Import DAL functions
const dal_airlines = require("./dals/dal_airlines");
const dal_countries = require("./dals/dal_countries");
const dal_customers = require("./dals/dal_customers");
const dal_flights = require("./dals/dal_flights");
const dal_tickets = require("./dals/dal_tickets");
const dal_users = require("./dals/dal_users");

// Airlines
async function getAllAirlinesBL() {
  return await dal_airlines.get_all_airlines();
}
async function getAirlineByIdBL(id) {
  return await dal_airlines.get_airline_by_id(id);
}
// Countries
async function getAllCountriesBL() {
  return await dal_countries.get_all_countries();
}
async function getCountryByIdBL(id) {
  return await dal_countries.get_country_by_id(id);
}
// Customers
async function updateCustomerBL(id, updated_customer_data) {
  return await dal_customers.update_customer(id, updated_customer_data);
}
async function deleteCustomerBL(id) {
  return await dal_customers.delete_customer(id);
}
// Flights
async function getAllFlightsBL() {
  return await dal_flights.get_all_flights();
}
async function getFlightByIdBL(id) {
  return await dal_flights.get_flight_by_id(id);
}
// עבור אותו היוזר
async function newFlightBL(new_flight_data) {
  return await dal_flights.new_flight(new_flight_data);
}
async function updateFlightBL(id, updated_flight_data) {
  return await dal_flights.update_flight(id, updated_flight_data);
}
async function deleteFlightBL(id) {
  return await dal_flights.delete_flight(id);
}
// Tickets רק עבור אותו היוזר
async function getAllTicketsBL() {
  return await dal_tickets.get_all_tickets();
}
async function getTicketByIdBL(id) {
  return await dal_tickets.get_ticket_by_id(id);
}
async function newTicketBL(new_ticket_data) {
  return await dal_tickets.new_ticket(new_ticket_data);
}
async function updateTicketBL(id, updated_ticket_data) {
  return await dal_tickets.update_ticket(id, updated_ticket_data);
}
async function deleteTicketBL(id) {
  return await dal_tickets.delete_ticket(id);
}
// Users רק עבור אותו היוזר
async function getUserByIdBL(id) {
  return await dal_users.get_user_by_id(id);
}
async function newUserBL(new_user_data) {
  return await dal_users.new_user(new_user_data);
}
async function updateUserBL(id, updated_user_data) {
  return await dal_users.update_user(id, updated_user_data);
}
async function deleteUserBL(id) {
  return await dal_users.delete_user(id);
}

// Export the BL functions
module.exports = {
  connectedKnex,
  getAllAirlinesBL,
  getAirlineByIdBL,
  getAllCountriesBL,
  getCountryByIdBL,
  updateCustomerBL,
  deleteCustomerBL,
  getAllFlightsBL,
  getFlightByIdBL,
  newFlightBL,
  updateFlightBL,
  deleteFlightBL,
  getAllTicketsBL,
  getTicketByIdBL,
  newTicketBL,
  updateTicketBL,
  deleteTicketBL,
  getUserByIdBL,
  newUserBL,
  updateUserBL,
  deleteUserBL,
};
