function calculate_bmi(height, weight) {
    let bmi = weight / (height*height);
    console.log("Your BMI is " + bmi ".");
}

calculate_bmi(1.75, 75);