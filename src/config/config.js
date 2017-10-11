import AppenderConfig from './../appender/config';
import LoggerConfig from './../logger/config';

export default class LogConfig {

  constructor() {
    this.appenders = {};
    this.loggerConfigs = {};
  }

  setup(json) {
    for (let index in json.appenders) {
      let appender = json.appenders[index];
      this.appenders[appender.name] = AppenderConfig.fromJSON(index, appender);
    }

    for (let index in json.loggers) {
      let logger = json.loggers[index];
      this.loggerConfigs[index] = LoggerConfig.fromJSON(index, logger);
    }
  }

  print(name, log) {
    let loggerConfigs = this.filter(name, log.level);
    loggerConfigs.forEach(loggerConfig => {
      loggerConfig.appenderRefs.forEach(appenderRef => {
        if (this.appenders[appenderRef]) {
          this.appenders[appenderRef].print(log);
        }
      })
    });
  }

  filter(name, level) {
    let loggerConfigs = [];
    for (let index in this.loggerConfigs) {
      //console.log(name,this.loggerConfigs[index].pattern,new RegExp(this.loggerConfigs[index].pattern).test(name));
      if (new RegExp(this.loggerConfigs[index].pattern).test(name)) {
        if (this.loggerConfigs[index].level === level) {
          loggerConfigs.push(this.loggerConfigs[index]);
        }
      }
    }
    return loggerConfigs;
  }
}
