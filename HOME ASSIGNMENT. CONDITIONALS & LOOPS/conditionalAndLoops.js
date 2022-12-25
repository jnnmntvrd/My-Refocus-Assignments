function senseOxy(oxySat){
        if(oxySat <= 92){
            console.log("Seek urgent medical advice.");
        }
        else if(oxySat <= 94){
            console.log("Seek advice from health professional.")
        }
        else if(oxySat == 95){
            console.log("Accepatable to continue home monitoring.");
        }
        else if(oxySat >= 96){
            console.log("Normal reading.");
        }
        
        }
    
    senseOxy(95);
    
    //PART 2
    
    function senseOxy2(pulseRate){
        if(pulseRate <= 100){
            console.log("Normal reading.");
        }
        else if(pulseRate <= 109){
            console.log("Accepatable to continue home monitoring.");
        }
        else if(pulseRate <= 130){
            console.log("Seek advice from health professional.")
        }
        else if(pulseRate >= 131){
            console.log("Seek urgent medical advice.");
        }
    }
    
    senseOxy2(108);