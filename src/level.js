const LEVEL_TYPE = {
    OFF: 'off',
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    DEBUG: 'debug',
    TRACE: 'trace',
    LOG: 'log'
}

class LEVEL {
    constructor(msg, throwable, levelF) {
        this.msg = msg;
        this.throwable = throwable;
        this.level = level;
    }
}
class Error extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.ERROR);
    }
}
class Warn extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.WARN);
    }
}
class Info extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.INFO);
    }
}

class Debug extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.DEBUG);
    }
}
class Trace extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.TRACE);
    }
}
class Log extends LEVEL {
    constructor(msg, throwable) {
        super(msg, throwable, LEVEL_TYPE.LOG);
    }
}

export { LEVEL_TYPE, LEVEL, Error, Warn, Info, Debug, Trace, Log };