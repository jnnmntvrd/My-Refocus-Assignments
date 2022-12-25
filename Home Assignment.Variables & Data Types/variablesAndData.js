let caloriesPerHour = 225/0.5;
let samMinDay = 0.5;
let samDay = 15;
let totalCalories = caloriesPerHour * samMinDay * samDay;

console.log('Great work, Sam! After '+ samMinDay + ' hours of cycling every day for ' + samDay +' days, you may lose a total of ' +totalCalories+' calories.');


let samSave = 7500;
let samGoal = 10000;
let savePercentNeed = (1-(samSave/samGoal)) * 100;

console.log('Thank you for your discipline and hardwork, Sam! You are now ' +savePercentNeed+'% away from your goal of saving '+samGoal+'.');