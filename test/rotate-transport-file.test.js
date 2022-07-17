import winston, {format} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

test('logging with daily rotate file', () => { 

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
    level: 'info', // mau menampilkan dari mana ke mana, contoh set info maka akan menampilkan dari level log info ke atas sampai ke level error
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
      new DailyRotateFile({
        filename: 'app-%DATE%.log',
        zippedArchive: true,
        maxSize: '100m',
        maxFiles: '14d'
      })
    ]
  });

  for (let index = 0; index < 5000; index++) {
    logger.info('Hello world ' + index);
  }

});