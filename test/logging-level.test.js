import winston from "winston";

test('create new logger with transport', () => { 

  const logger = winston.createLogger({
    level: 'warn',
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.log({level: 'error', message: 'Hello error'});
  logger.log({level: 'warn', message: 'Hello warn'});
  logger.log({level: 'info', message: 'Hello info'});
  logger.log({level: 'http', message: 'Hello HTTP'});
  logger.log({level: 'verbose', message: 'Hello verbose'});
  logger.log({level: 'debug', message: 'Hello debug'});
  logger.log({level: 'silly', message: 'Hello silly'});

});