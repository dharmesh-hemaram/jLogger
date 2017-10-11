import Appender from './appender';

export default class Console extends Appender {
  constructor(appender) {
    super(appender.patternLayout);
  }

  print(log) {
    if (log.msg instanceof Error) {
      console[log.level](this.format(log), log.msg);
    } else {
      console[log.level](this.format(log));
    }
  }
}