let raceNumber = Math.floor(Math.random() * 1000);
let early_registration = false;
let runner_age = 18;

if(early_registration && runner_age>18){
    raceNumber += 1000;
    let racetime = "9:30 am";
    console.log(`Your race number is ${raceNumber} and your race time is ${racetime}`);
}else if(runner_age>18){
    let racetime = "11:00 am";
    console.log(`Your race number is ${raceNumber} and your race time is ${racetime}`);
}else if(runner_age<18){
    let racetime = "12:30 pm";
    console.log(`Your race number is ${raceNumber} and your race time is ${racetime}`);
}else{
    console.log(`You should go see the registration desk`);
}