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
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + ingredients.join(",") + "&number=5&ignorePantry=true&ranking=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": rapidKey,
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    };

    $.ajax(settings1).done(function (response1) {
        var recipeSection = document.getElementById("recepie-section");
        recipeSection.innerHTML = "";

        response1.forEach(function (recipe) {
            var recipeCard = `
            <div class="container">
             <div class="row">
			<div class="card my-3" style="flex: 1;">
				<img src="${recipe.image}" class="card-img-top" height="100px" width="75px">
				<div class="card-body">
					<h5 class="card-title">${recipe.title}</h5>
					<p class="card-text">${recipe.ingredients}</p>
					<a href="${recipe.sourceUrl}" class="btn btn-primary">Go to recipe</a>
				</div>
			</div>
			<div>
			<div>
		`;
            recipeSection.innerHTML += recipeCard;
        });
    });
    console.log(ingredients);
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
        let nutritionSection = document.getElementById("nutrition-section");
        console.log(response2);
        nutritionSection.innerHTML = "";
        if (Array.isArray(response2.parsed) && response2.parsed.length) {
            response2.parsed.forEach(function (food) {
                console.log(food);
                let nutritionCard = `
            <div class="card my-3">
              <div class="card-body">
                <h5 class="card-title">${food.food.label}</h5>
                <p class="card-text">Energy: ${food.food.nutrients.ENERC_KCAL || 0} kcal</p>
                <p class="card-text">Protein: ${food.food.nutrients.PROCNT || 0} g</p>
                <p class="card-text">Fat: ${food.food.nutrients.FAT || 0} g</p>
                <p class="card-text">Carbohydrates: ${food.food.nutrients.CHOCDF || 0} g</p>
                <p class="card-text">Fiber: ${food.food.nutrients.FIBTG || 0} g</p>
              </div>
            </div>
  `;
                nutritionSection.innerHTML += nutritionCard;
            });
        }
    });

});

