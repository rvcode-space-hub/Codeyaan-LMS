import logger from "../config/logger.js";

export const errorHandler = (err, req, res, next) => {

  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
};