// con job worker
const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
  "*/10 * * * * *", // */10 * * * * = runs every 10 sec
  function() {
    console.log("runs every 10 sec");
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;



