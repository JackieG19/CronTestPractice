const CronJob = require('cron').CronJob;

// const randomAdder = () => {};
// add up 15 random number between 10 - 100 console.log(the total)
// challenge: create a worker that will run once

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const addWorker = new CronJob( '* * * * * *', function(){
  this.stop();
  let total = 0;
    for(var i = 0; i < 15; i++){
      total += getRandom(10, 101);
    }

    console.log(`total is: ${total}`);
},
null,
false,
"America/New_York"
);

module.exports = addWorker;