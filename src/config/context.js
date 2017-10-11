import LogConfig from './config';

export default class LogContext {
  constructor() {
    this.config = new LogConfig();
  }

  static getInst() {
    if (!this.inst) {
      this.inst = new LogContext();
    }
    return this.inst;
  }
}