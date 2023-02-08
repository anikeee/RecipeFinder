// Spoonacular API playground
let data = [];

// Retrieve saved ingredients from local storage
function retrieveIngredients() {
    if (localStorage.getItem("ingredients")) {
        return JSON.parse(localStorage.getItem("ingredients"));
    }
    return [];
}

// Search button click event
document.getElementById("search-btn").addEventListener("click", function () {
    const ingredients = retrieveIngredients();
    const settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + ingredients.join(",") + "&number=6&ignorePantry=true&ranking=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": rapidKey,
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    };

    $.ajax(settings1).done(function (response1) {
        //var recipeSection = document.getElementById("recipe-section");
        //recipeSection.innerHTML = "";
        let i = 1;

        response1.forEach(function (recipe) {
            console.log(recipe);
            var recipeSection = document.getElementById("recipe-section-" + [i]);
            recipeSection.innerHTML = "";
            var recipeCard = `
			<div class="card my-3 text-center" style="flex: 1;">
				<img src="${recipe.image}" class="card-img-top mx-auto d-block" width ="1000">
				<div class="card-body">
					<h5 class="card-title">${recipe.title}</h5>
					<p class="card-text">Likes : ${recipe.likes}</p>
					<a href="#" class="btn btn-primary">Show recipe</a>
				</div>
			</div>
			
			
		`;
            recipeSection.innerHTML += recipeCard;
            i++;
        });

    });

    let numIngredients = ingredients.length;
    const mainNutrition = document.getElementById("mainNutrition");

// Calculate the number of columns needed for nutrition sections
    const numColumns = 2;

// Create the number of nutrition sections needed
    for (let i = 1; i <= numIngredients; i++) {
        let nutritionSection = document.createElement("div");
        nutritionSection.className = "card-body";
        nutritionSection.id = "nutrition-section-" + i;

        // Add the nutrition section to the main nutrition section
        if (i % numColumns === 1) {
            let row = document.createElement("div");
            row.className = "row";
            row.appendChild(nutritionSection);
            mainNutrition.appendChild(row);
        } else {
            mainNutrition.lastChild.appendChild(nutritionSection);
        }
    }

    console.log(numIngredients);
    //Edamam API playground
    for (let i = 1; i <= numIngredients; i++) {
        let ingredient = ingredients[i - 1];

        const settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + ingredient,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": rapidKey,
                "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
            }
        };

        $.ajax(settings2).done(function (response2) {

            let nutritionSection = document.getElementById("nutrition-section-" + i);
            nutritionSection.innerHTML = "";

            console.log(response2);
            response2.parsed.forEach(function (food) {
                let nutritionCard = `
            <div class="card my-3">
              <div class="card-body">
                <h5 class="card-title">${food.food.label}</h5>
                <p class="card-text">Energy: ${food.food.nutrients.ENERC_KCAL} kcal</p>
                <p class="card-text">Protein: ${food.food.nutrients.PROCNT} g</p>
                <p class="card-text">Fat: ${food.food.nutrients.FAT} g</p>
                <p class="card-text">Carbohydrates: ${food.food.nutrients.CHOCDF} g</p>
                <p class="card-text">Fiber: ${food.food.nutrients.FIBTG} g</p>
              </div>
            </div>
            `;
                nutritionSection.innerHTML += nutritionCard;
            });
        });
    }

});