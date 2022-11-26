const moment = require("moment")

function Age(birthday) {
    const birthdayFormat = moment(birthday, "DD/MM/YYYY").format("YYYY-MM-DD")
    const overAge = moment().diff(birthdayFormat, "years")
   
    return overAge;

}

module.exports = Age