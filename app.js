let raceNumber = Math.floor(Math.random() * 1000);

let checkedEarly = false;
let runnerAge = 16;

if (runnerAge > 18 && checkedEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && checkedEarly) {
    console.log(`You will race at 9:30 am. Your number is ${raceNumber}.`);
} else if (runnerAge > 18 && !checkedEarly) {
    console.log(`You will race at 11:00 am. Your number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30 pm. Your number is ${raceNumber}. `)
} else {
    console.log('See registration desk.');
}