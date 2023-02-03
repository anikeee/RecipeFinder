let ingredients = [];
function addIngredient() {
    let input = document.getElementById("ingredient-input").value;
    ingredients.push(input);
    console.log(ingredients);
}


// Save ingredients to local storage
function saveIngredients() {
    const input = document.getElementById("ingredient-input").value;
    let ingredients = [];
    if (localStorage.getItem("ingredients")) {
        ingredients = JSON.parse(localStorage.getItem("ingredients"));
    }
    ingredients.push(input);
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
}

// Retrieve saved ingredients from local storage
function retrieveIngredients() {
    let ingredients = [];
    if (localStorage.getItem("ingredients")) {
        ingredients = JSON.parse(localStorage.getItem("ingredients"));
    }
    if (input.value.trim() !== "") {
        ingredients.push(input.value.trim());
        localStorage.setItem("ingredients", JSON.stringify(ingredients));
        input.value = "";
    }
    return ingredients;
}


// Add click event to "Add Ingredient" button
document.getElementById("add-ingredient-btn").addEventListener("click", function() {
    saveIngredients();
});

