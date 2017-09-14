export default class Logger {
    constructor() {

    }

    debug(msg) {
        Filter.getInst().log(new Debug(msg));
    }

    log() {
        Filter.getInst().log(new Debug(msg));
    }

    static setLevel() {

    }

    static setFilter() {

    }
}