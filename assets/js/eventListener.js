document.addEventListener("DOMContentLoaded", function() {
    const ingredients = retrieveIngredients();
    console.log(ingredients);
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});