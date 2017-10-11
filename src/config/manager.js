import LogContext from './context';
import Logger from './../logger/logger';

export default class LogManager {

  static getLogger(name) {
    return new Logger(name);
  }

  static setup(json) {
    return this.getContext().config.setup(json);
  }

  static getContext() {
    return LogContext.getInst();
  }
}