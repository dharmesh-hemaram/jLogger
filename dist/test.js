let log;
Utils.loadJSON('logging-config.json')
  .then(json => {
    LogManager.setup(json);
    log = LogManager.getLogger('foo');
    log.trace("Trace Message!");
    log.debug("Debug Message!");
    log.info("Info Message!");
    log.warn("Warn Message!");
    log.error("Error Message!");
    log.fatal("Fatal Message!");

    log.isse();
  })
  .catch(error => log.error(error));