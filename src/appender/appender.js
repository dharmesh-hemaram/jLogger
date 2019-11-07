import Format from './format';

export default class Appender extends Format {
  constructor(patternLayout) {
    super();
    this.setter(patternLayout, "patternLayout", false);
  }

  log(level, msg) {
    console[level](msg);
  }
}