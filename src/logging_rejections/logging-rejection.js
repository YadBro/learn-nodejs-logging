import winston from "winston";

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({
      handleRejections: true,
      filename: './src/logging_rejections/rejections.log'
    }),
  ]
});



hello();