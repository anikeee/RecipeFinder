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
        ingredients.forEach(function(ingredient, index) {
            const li = document.createElement("li");
            li.textContent = ingredient;

            // Add "Remove" button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", function() {
                ingredients.splice(index, 1);
                updateIngredientsList();
            });
            li.appendChild(removeBtn);

            ingredientsList.appendChild(li);
        });
    }

    updateIngredientsList();
};

