// Spoonacular API playground
var ingredients = ["Apple", "Pear"];
var rapidKey = "YOUR_RAPIDAPI_KEY"; // replace this with your actual key
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
	console.log(response1);
	var recipeImage = response1.image;
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
	console.log(response2);
});
