window.onload = function() {
    const form = document.querySelector("form");
    const input = form.querySelector("#ingredient-input");
    let ingredients = retrieveIngredients();

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        ingredients.push(input.value);
        input.value = "";
        saveIngredients();
        updateIngredientsList();
    });

    const ingredientsList = document.querySelector("#ingredient-list");

    function updateIngredientsList() {
        ingredientsList.innerHTML = "";
        ingredients.forEach(function(ingredient) {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
    }

    updateIngredientsList();
};
