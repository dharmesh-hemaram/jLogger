
import Console from './console';
import DB from './db';

const APPENDER_TYPE = { CONSOLE: 'console', DB: 'DB' };

export default class AppenderConfig {
  static fromJSON(type, json) {
    let appender;
    switch (type) {
      case APPENDER_TYPE.CONSOLE:
        appender = new Console(json);
        break;
      case APPENDER_TYPE.DB:
        appender = new DB(json);
        break;
      default:
        throw new Error(type + " is not available");
    }
    return appender;
  }
}