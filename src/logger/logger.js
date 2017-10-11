import Common from './../common/common';
import LogManager from './../config/manager';
import { Trace, Debug, Info, Warn, Error } from './level';

export default class Logger extends Common {
  constructor(name) {
    super();
    this.setter(name, 'name', true);
  }
  trace(msg) {
    this.print(new Trace(msg));
  }
  debug(msg) {
    this.print(new Debug(msg));
  }
  info(msg) {
    this.print(new Info(msg));
  }
  log(msg) {
    this.print(new Log(msg));
  }
  warn(msg) {
    this.print(new Warn(msg));
  }
  error(msg) {
    this.print(new Error(msg));
  }
  print(log) {
    LogManager.getContext().config.print(this.name, log);
  }
}