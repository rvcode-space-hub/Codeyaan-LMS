import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const transport = new DailyRotateFile({
  filename: "logs/application-%DATE%.log",
  datePattern: "DD-MM-YYYY",
  maxSize: "20m",
  maxFiles: "14d"
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    // winston.format.timestamp() // UTC timezone

    //India time 
    winston.format.timestamp({
      format: () =>
        new Date().toLocaleString("sv-SE", {
          timeZone: "Asia/Kolkata"
        })
    }),

    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    transport
  ]
});

export default logger;