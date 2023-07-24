//BMI Calculator
function bmicalc(e) {
  e.preventDefault();

  let height = parseFloat(document.getElementById("height").value / 100);
  let weight = parseFloat(document.getElementById("weight").value);
  let bmiCategoryContainer = document.getElementById("bmic");

  let bmiCategory = calculateBmi(height, weight);
  console.log(bmiCategory);
  bmiCategoryContainer.textContent = bmiCategory;
  giveAdvice(bmiCategory);
}

function calculateBmi(height, weight) {
  let bmiContainer = document.getElementById("bmi");
  let bmi = weight / (height * height);

  bmiContainer.textContent = bmi.toFixed(2);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "OverWeight";
  } else if (bmi >= 30) {
    return "Obese";
  } else {
    return "";
  }
}

function giveAdvice(bmiCategory) {
  let adviceContainer = document.querySelector(".advice");
  let adviceList = document.getElementById("adv");
  let advices = [
    {
      type: "Underweight",
      advice: [
        "Eat high calorie foods",
        "Exercise Regularly",
        "Choose Protein rich foods",
      ],
    },
    {
      type: "Normal Weight",
      advice: ["Exercise Regularly", "Try main-gaining for healthy growth"],
    },
    {
      type: "OverWeight",
      advice: [
        "Exercise Regularly",
        "Eat low calorie dense food",
        "Few cups of coffee can help increase metabolism",
        "Cardio exercise is suitable",
      ],
    },
    {
      type: "Obese",
      advice: [
        "Exercise Regularly",
        "Do not rush, Slow and consistent fat loss is better",
        "Eat low calorie dense food",
        "Cardio can be hard, but even a small step can help",
        "Few caffeine and lemon might help boost metabolism",
      ],
    },
  ];

  bmiCategory === ""
    ? ""
    : (adviceContainer.textContent = "Things you can do:");
  advices.map((a) => {
    if (a.type === bmiCategory) {
      adviceList.innerHTML = "";
      for (i = 0; i < a.advice.length; i++) {
        adviceList.innerHTML += "<li>" + a.advice[i] + "</li>";
      }
    }
  });
}
