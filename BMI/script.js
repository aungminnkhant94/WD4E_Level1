document.querySelector("button").addEventListener("click", e => {
    var height = parseFloat(document.querySelector("#height").value)
    var weight = parseFloat(document.querySelector("#weight").value)

    var bmi = weight / (height/100) ** 2;
    bmi = bmi.toFixed(2);

    if (bmi > 0 && bmi <= 18.5) {
        document.querySelector("#output").innerHTML = 'Your BMI is: ' + bmi + '<br> Your weight is <span> very serverly underweight <span>.'
    } else if (bmi > 18.5 && bmi <= 25) {
        document.querySelector("#output").innerHTML = 'Your BMI is: ' + bmi + '<br> Your weight is <span> Normal (Healthy weight) <span>.'
    } else if (bmi > 25 && bmi <= 30) {
        document.querySelector("#output").innerHTML = 'Your BMI is: ' + bmi + '<br> Your weight is <span> very serverly Overweight <span>.'
    } else if(bmi > 30 && bmi <= 35) { 
        document.querySelector("#output").innerHTML = 'Your BMI is: ' + bmi + '<br> Your weight is <span> Obese Class I   <span>.'
    } else if(bmi > 35 && bmi <=40) {
        document.querySelector("#output").innerHTML = 'Your BMI is: ' + bmi + '<br> Your weight is <span> Obese Class II <span>.'
    } else {
        document.querySelector("#output").innerHTML = 'Please Type valid numbers'
    }
})