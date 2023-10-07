const log4js = require('log4js');


log4js.configure({
    appenders: {
        console: { type: 'stdout', layout: { type: 'colored' } }
    },
    categories: {
      default: {    
        appenders: ['console'],
        level: process.env.LOGGING_LEVEL
      }
    }
});


log4js.addLayout("json", function (config) {
    return function (logEvent) {
      return JSON.stringify(logEvent) + config.separator;
    };
});

const logger = log4js.getLogger(process.env.SERVICE_NAME);

module.exports = logger;