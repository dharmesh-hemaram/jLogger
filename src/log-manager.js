import LoggerContext from './logger-context';
import Config from './config';
import Utils from '@dharmesh-hemaram/jdb';

export default class LogManager {
    constructor() {

    }

    getLogger() {
        return LoggerContext.getInst().getLogger();
    }
}


Config.setup();