window.onload = function() {
    const form = document.querySelector("form");
    const input = form.querySelector("#ingredient-input");
    let ingredients = retrieveIngredients();

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (input.value.length > 0) {
            let inputIngredients = input.value.split(",");
            inputIngredients.forEach(function(ingredient) {
                ingredients.push(ingredient.trim());
            });
            input.value = "";
            localStorage.setItem("ingredients", JSON.stringify(ingredients));
            updateIngredientsList();
        }
    });

    const ingredientsList = document.querySelector("#ingredient-list");

    function updateIngredientsList() {
        ingredientsList.innerHTML = "";
        ingredients.forEach(function(ingredient, index) {
            const li = document.createElement("li");
            li.textContent = ingredient;
            const removeButton = document.createElement("button");
            removeButton.setAttribute("class", "btn btn-primary m-2");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function() {
                ingredients.splice(index, 1);
                localStorage.setItem("ingredients", JSON.stringify(ingredients));
                updateIngredientsList();
            });

            li.appendChild(removeButton);
            ingredientsList.appendChild(li);
        });
        console.log(ingredients);
    }

    updateIngredientsList();

    //showing data from api handler


};
