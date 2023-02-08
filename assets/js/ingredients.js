let ingredients = [];
function addIngredient() {
    let input = document.getElementById("ingredient-input").value;
    if (input.indexOf(',') !== -1) {
        let inputIngredients = input.split(',');
        inputIngredients.forEach(function(ingredient) {
            ingredients.push(ingredient.trim());
        });
    } else {
        ingredients.push(input);
    }
    console.log(ingredients);
}
// Save ingredients to local storage
function saveIngredients() {
    addIngredient();
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
}


// Retrieve saved ingredients from local storage
function retrieveIngredients() {
    let ingredients = [];
    if (localStorage.getItem("ingredients")) {
        ingredients = JSON.parse(localStorage.getItem("ingredients"));
    }
    return ingredients;
}


// Add click event to "Add Ingredient" button
document.getElementById("add-ingredient-btn").addEventListener("click", function() {
    saveIngredients();
});

