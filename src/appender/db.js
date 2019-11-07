import Appender from './appender';

export default class DB extends Appender {
  constructor(appender) {
    super(appender.patternLayout);
  }
  print(log) {
    console[log.level]("DB:"+this.format(log));
  }
}