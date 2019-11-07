import Common from './../common/common';

export default class LoggerConfig extends Common {
  constructor(pattern, level, appenderRefs) {
    super();
    this.setter(pattern, "pattern", false);
    this.setter(level, "level", true);
    this.setAppenderRefs = appenderRefs;
  }

  set setAppenderRefs(appenderRefs) {
    this.appenderRefs;
    if (typeof appenderRefs === 'object' && appenderRefs instanceof Array) {
      this.appenderRefs = appenderRefs;
    } else if (appenderRefs !== undefined) {
      this.error('appenderRefs', appenderRefs);
    }
  }

  static fromJSON(type, json) {
    return new LoggerConfig(json.pattern, json.level, json.appenderRefs);
  }
}