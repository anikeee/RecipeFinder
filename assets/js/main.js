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
            var recipeSection = document.getElementById("recipe-section-" + [i]);
            recipeSection.innerHTML = "";
            var recipeCard = `
			<div class="card my-3 text-center" style="flex: 1;">
				<img src="${recipe.image}" class="card-img-top mx-auto d-block" width ="1000">
				<div class="card-body">
					<h5 class="card-title">${recipe.title}</h5>
					<p class="card-text">${recipe.ingredients}</p>
					<a href="${recipe.sourceUrl}" class="btn btn-primary">Go to recipe</a>
				</div>
			</div>
			
			
		`;
            recipeSection.innerHTML += recipeCard;
            i++;
        });
    });

    //Edamam API playground
    const settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + ingredients.join(","),
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": rapidKey,
            "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
        }
    };

    $.ajax(settings2).done(function (response2) {
        let i = 1;
        ;
        console.log(response2);
        response2.parsed.forEach(function (food) {
            var nutritionSection = document.getElementById("nutrition-section-" + [i]);
            var nutritionCard = `
    <div class="card">
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
            i++;
        });

    });
});

