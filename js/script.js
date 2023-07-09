
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetails = document.querySelector('.meal-details');
const closeBtn = document.querySelector('#close-btn');
const allRec = document.querySelector('.all');

// Event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealnewRecipe);
allRec.addEventListener('click', getMealList);

//Close the modal
function closef(){
    console.log('closeee');
    mealDetails.classList.add('hidden');
    mealDetails.innerHTML = "";
    mealDetails.innerHTML += 
    `<span class="close material-icons" id="close-btn" onclick="closef()">
        close
    </span>`;
}


// Meal List that matches the input
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let newDiv = "";
        if(data.meals){
            data.meals.forEach(meal => {
                newDiv += `
                    <div class = "recipes-box" data-id = "${meal.idMeal}">
                        <div class = "recipe-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "recipe-name">
                            <h3 align="center">${meal.strMeal}</h3>
                            <a href = "#" class = "newRecipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            newDiv = "No Results found!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = newDiv;
    });
}


//Recipe of specific meal
function getMealnewRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('newRecipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealnewRecipeModal(data.meals));
    }
}

//Recipe Description
function mealnewRecipeModal(meal){
    selectedMeal = meal[0];
    console.log(meal)
    console.log(selectedMeal)
    let newDiv = `
        <div class = "newRecipe-meals">
            <img src = "${selectedMeal.strMealThumb}" alt = "">
            <h2 class = "newRecipe-title">${selectedMeal.strMeal}</h2>
        </div>
        <div class = "newRecipe-instruct">
            <h3>Instructions:</h3>
            <p>${selectedMeal.strInstructions}</p>
        </div>
        <div class = "newRecipe-link">
            <a href = "${selectedMeal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetails.classList.remove('hidden');
    mealDetails.innerHTML += newDiv;
    mealDetails.parentElement.classList.add('shownewRecipe');
}
