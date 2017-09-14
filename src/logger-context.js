import Logger from './logger';

class LoggerContext {
    constructor() {

    }

    getInst() {
        if (this.inst) {
            this.inst = new LoggerContext();
        }
        return this.inst;
    }

    getLogger() {
        return new Logger();
    }

    setConfig(level) {
        this.config = new LoggerConfig(level);
    }
}