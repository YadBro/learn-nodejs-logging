import winston from "winston";

test('create new logger with transport (shorcut)', () => { 

  const logger = winston.createLogger({
    level: 'warn',
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error('Hello error');
  logger.warn('Hello warn');
  logger.info('Hello info');
  logger.http('Hello HTTP');
  logger.verbose('Hello verbose');
  logger.debug('Hello debug');
  logger.silly('Hello silly');

});