const express = require("express");
const router = express.Router();

// // Require your BL modules
const blAdmin = require("../bls/bl_admin");
// blAdmin.setDal();

// Airlines routes
//----------------
// GET all airlines
router.get("/airlines", async (req, res) => {
  try {
    const airlines = await blAdmin.getAllAirlinesBL();
    res.json(airlines);
  } catch (error) {
    console.error("Error fetching airlines:", error);
    res.status(500).send(error.message);
  }
});
// GET an airline by ID
router.get("/airlines/:id", async (req, res) => {
  try {
    const airline = await blAdmin.getAirlineByIdBL(req.params.id);
    res.json(airline);
  } catch (error) {
    console.error("Error fetching airline:", error);
    res.status(500).send(error.message);
  }
});
// POST a new airline
router.post("/new-airline", async (req, res) => {
  try {
    const newAirline = await blAdmin.newAirlineBL(req.body);
    res.status(201).json(newAirline);
  } catch (error) {
    console.error("Error creating new airline:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) an airline
router.put("/update-airline/:id", async (req, res) => {
  try {
    const updatedAirline = await blAdmin.updateAirlineBL(
      req.params.id,
      req.body
    );
    res.json(updatedAirline);
  } catch (error) {
    console.error("Error updating airline:", error);
    res.status(500).send(error.message);
  }
});
// DELETE an airline
router.delete("/delete-airlines/:id", async (req, res) => {
  try {
    await blAdmin.deleteAirlineBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting airline:", error);
    res.status(500).send(error.message);
  }
});

// Countries routes
//-----------------
// GET all countries
router.get("/countries", async (req, res) => {
  try {
    const countries = await blAdmin.getAllCountriesBL();
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).send(error.message);
  }
});
// GET a country by ID
router.get("/countries/:id", async (req, res) => {
  try {
    const country = await blAdmin.getCountryByIdBL(req.params.id);
    res.json(country);
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).send(error.message);
  }
});
// POST a new country
router.post("/new-country", async (req, res) => {
  try {
    const newCountry = await blAdmin.newCountryBL(req.body);
    res.status(201).json(newCountry);
  } catch (error) {
    console.error("Error creating new country:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) a country
router.put("/update-country/:id", async (req, res) => {
  try {
    const updatedCountry = await blAdmin.updateCountryBL(
      req.params.id,
      req.body
    );
    res.json(updatedCountry);
  } catch (error) {
    console.error("Error updating country:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a country
router.delete("/delete-country/:id", async (req, res) => {
  try {
    await blAdmin.deleteCountryBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting country:", error);
    res.status(500).send(error.message);
  }
});

// Customers routes
//-----------------
// GET all customers
router.get("/customers", async (req, res) => {
  try {
    const customers = await blAdmin.getAllCustomersBL();
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).send(error.message);
  }
});
// GET a customer by ID
router.get("/customers/:id", async (req, res) => {
  try {
    const customer = await blAdmin.getCustomerByIdBL(req.params.id);
    res.json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).send(error.message);
  }
});
// POST a new customer
router.post("/new-customer", async (req, res) => {
  try {
    const newCustomer = await blAdmin.newCustomerBL(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating new customer:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) a customer
router.put("/update-customer/:id", async (req, res) => {
  try {
    const updatedCustomer = await blAdmin.updateCustomerBL(
      req.params.id,
      req.body
    );
    res.json(updatedCustomer);
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a customer
router.delete("/delete-customer/:id", async (req, res) => {
  try {
    await blAdmin.deleteCustomerBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).send(error.message);
  }
});

// Flights routes
//---------------
// GET all flights
router.get("/flights", async (req, res) => {
  try {
    const flights = await blAdmin.getAllFlightsBL();
    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).send(error.message);
  }
});
// GET a flight by ID
router.get("/flights/:id", async (req, res) => {
  try {
    const flight = await blAdmin.getFlightByIdBL(req.params.id);
    res.json(flight);
  } catch (error) {
    console.error("Error fetching flight:", error);
    res.status(500).send(error.message);
  }
});
// POST a new flight
router.post("/new-flight", async (req, res) => {
  try {
    const newFlight = await blAdmin.newFlightBL(req.body);
    res.status(201).json(newFlight);
  } catch (error) {
    console.error("Error creating new flight:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) a flight
router.put("/update-flight/:id", async (req, res) => {
  try {
    const updatedFlight = await blAdmin.updateFlightBL(req.params.id, req.body);
    res.json(updatedFlight);
  } catch (error) {
    console.error("Error updating flight:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a flight
router.delete("/delete-flight/:id", async (req, res) => {
  try {
    await blAdmin.deleteFlightBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting flight:", error);
    res.status(500).send(error.message);
  }
});

// Tickets routes
//---------------
// GET all tickets
router.get("/tickets", async (req, res) => {
  try {
    const tickets = await blAdmin.getAllTicketsBL();
    res.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).send(error.message);
  }
});
// GET a ticket by ID
router.get("/tickets/:id", async (req, res) => {
  try {
    const ticket = await blAdmin.getTicketByIdBL(req.params.id);
    res.json(ticket);
  } catch (error) {
    console.error("Error fetching ticket:", error);
    res.status(500).send(error.message);
  }
});
// POST a new ticket
router.post("/new-ticket", async (req, res) => {
  try {
    const newTicket = await blAdmin.newTicketBL(req.body);
    res.status(201).json(newTicket);
  } catch (error) {
    console.error("Error creating new ticket:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) a ticket
router.put("/update-ticket/:id", async (req, res) => {
  try {
    const updatedTicket = await blAdmin.updateTicketBL(req.params.id, req.body);
    res.json(updatedTicket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a ticket
router.delete("/delete-ticket/:id", async (req, res) => {
  try {
    await blAdmin.deleteTicketBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).send(error.message);
  }
});

// Users routes
//-------------
// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await blAdmin.getAllUsersBL();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send(error.message);
  }
});
// GET a user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await blAdmin.getUserByIdBL(req.params.id);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send(error.message);
  }
});
// POST a new user
router.post("/new-user", async (req, res) => {
  try {
    const newUser = await blAdmin.newUserBL(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send(error.message);
  }
});
// PUT (update) a user
router.put("/update-user/:id", async (req, res) => {
  try {
    const updatedUser = await blAdmin.updateUserBL(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error.message);
  }
});
// DELETE a user
router.delete("/delete-user/:id", async (req, res) => {
  try {
    await blAdmin.deleteUserBL(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send(error.message);
  }
});

// Roles routes
//-------------
router.get("/roles", async (req, res) => {
  try {
    const roles = await blAdmin.getAllRolesBL();
    res.json(roles);
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
