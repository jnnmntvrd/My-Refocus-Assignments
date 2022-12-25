function convertToKelvinfromCel(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
    }
console.log(convertToKelvinfromCel(84));
    
    
function convertToKelvinFaren(tempFahren){
    let tempKelvin = ((tempFahren-32) / 1.8) + 273.15;
    return tempKelvin;
    }
console.log(convertToKelvinFaren(95));

function computeTip(totalBill){
    let calTip = 0.1 * totalBill;
    return calTip;
}
        
console.log(computeTip(85));