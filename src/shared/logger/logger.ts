import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info", // nível mínimo de log, pode ser alterado dinamicamente
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Exibe no console
    new transports.File({ filename: "application.log" }), // Grava em arquivo
  ],
});

export default logger;
