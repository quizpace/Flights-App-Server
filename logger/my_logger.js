const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;
const config = require("config");

//const file_name = String((new Date()).toLocaleString()).replace('/','_').replace(':','_').replace(' ','_')
const logger = createLogger({
  level: config.server.logLevel,
  format: combine(
    label({ label: "Flights System REST API App" }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: `logs/flights1.log`,
    }),
  ],
});

module.exports = logger;
