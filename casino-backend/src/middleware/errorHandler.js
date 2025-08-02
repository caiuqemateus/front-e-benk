const logger = require('../utils/logger');

const notFound = (req, res, next) => {
  const error = new Error(`Rota não encontrada - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  logger.error('Erro na aplicação:', {
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : '🥞',
  });

  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : '🥞',
  });
};

module.exports = {
  notFound,
  errorHandler,
};