class Appender {
    constructor() {
        this.config = new Config();
    }
    
    log(msg, level) {

    }
    
    getLogs() {
        db.get(db.index.LEVEL, 'Unknown')
            .then(response => console.debug(response))
            .catch(error => console.error(error));
    }
    
    console(msg, level) {
        console[level](msg);
    }

    db(msg, level) {

    }
}