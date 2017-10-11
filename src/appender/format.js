import Common from './../common/common';

export default class Format extends Common {
  constructor() {
    super();
  }
  format(log) {
    
    return this.patternLayout.replace(/%([\w]*)({(.*?)})?/g, (match, g1, g2, g3) => {
      if (g1 === "date") {
        return this.formatDate(log['timeStamp'], g3);
      }
      return log[g1];
    });
  }

  formatDate(timeStamp, formatter) {
    formatter = formatter ? formatter : "yyyy-MMM-dd hh:mm:ss";
    let date = new Date(timeStamp);

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var monthIndex = date.getMonth();

    let data = {
      dd: date.getDate(),
      DD: date.getDate(),
      MM: monthIndex + 1,
      MMM: monthNames[monthIndex].substring(0, 3),
      MMMM: monthNames[monthIndex],
      yyyy: date.getFullYear(),
      yy: date.getFullYear().toString().substring(2, 4),
      HH: date.getHours(),
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
      z: date.getTimezoneOffset()
    }

    return formatter.replace(/([A-z]+)/g, (match, g1) => {
      return data[g1];
    });
  }
}