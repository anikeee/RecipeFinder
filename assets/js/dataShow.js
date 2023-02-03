console.log(data);
let recepieSection = document.getElementById("recepie-section");
for (let i = 0; i < data.length; i++) {
    let recipe = data[i];

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let link = document.createElement("a");
    link.setAttribute("href", recipe.link);
    link.innerHTML = recipe.name;

    cardBody.appendChild(link);
    card.appendChild(cardBody);
    recepieSection.appendChild(card);
}
