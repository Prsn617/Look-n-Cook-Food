//BMI Calculator
function bmicalc(){
    let height = parseFloat(document.getElementById("height").value/100);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmic = "";

    let bmi = (weight)/(height*height);
    document.getElementById("bmi").innerHTML+= bmi.toFixed(2);

    if(bmi < 18.5){
        bmic = "Underweight";
    }
    else if(bmi >= 18.5 || bmi < 25){
        bmic = "Normal weight"
    }
    else if(bmi >= 25 || bmi < 30){
        bmic = "OverWeight"
    }
    else{
        bmic = "Obese"
    }

    document.getElementById("bmic").innerHTML+= bmic;
}