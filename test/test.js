Filter.getInst().setFilter({
    excludes: '*component',
    includes: [
        '*services',
        '*directive'
    ],
    level: LEVEL.ERROR
});

Logger.setLevel(LEVEL.ERROR);
Logger.setFilter({
    includes:[
        '*component'
    ]
});

Logger.setAppender('console','db');
Logger.get(LEVEL.ERROR).export('.csv');
Logger.setLayout('%d{dd MMM yyyy HH:mm:ss} %level %msg');
Logger.setLayout('[%d{dd MMM yyyy HH:mm:ss}] [%level] [%msg]');
Logger.setLayout('%d{HH:mm:ss}-%level %c{1}-%msg-%throw');

let logger = new Logger('my-component');


//#MSG
logger.log('Dharmesh');
logger.log(1);
logger.log(1);



