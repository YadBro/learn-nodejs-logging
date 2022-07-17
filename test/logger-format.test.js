import winston, {format} from "winston";

test('create new logger with transport (format)', () => { 

  const {printf,
    combine,
    label,
    timestamp,
    colorize,
    ms} = format;

  const myFormat = printf(({level, message, label, timestamp, ms}) => {
    return `${timestamp}, [${label}] ${level}: ${message} (${ms})`;
  });

  const logger = winston.createLogger({
    level: 'silly', // mau menampilkan dari mana ke mana, contoh set info maka akan menampilkan dari level log info ke atas sampai ke level error
    // format: format.json(),
    // format: format.logstash(),
    /* 
    format: format.combine(
      format.simple(),
      format.json()
    ),
    */
    // format: format.simple(),
    // format: format.prettyPrint(),
    // format: myFormat, //custom format
    format: combine(
      label({label: 'UwU Logging'}),
      timestamp(),
      colorize(),
      ms(),
      myFormat
    ), //custom format with combine
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: 'application.log'
      })
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