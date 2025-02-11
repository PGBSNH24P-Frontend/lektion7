class Recipe {
    constructor(title, description, ingredients) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
    }
}

let recipes = [
    new Recipe("Pannkakor", "Goda pannkakor", ["Ägg", "Mjöl", "Mjölk", "Socket"]),
    new Recipe("Hamburgare", "Goda hamburgare", ["Köttfärs", "Salt", "Bröd"]),
];

// JavaScript Object Notation (JSON)

function main() {
    localStorage.setItem("name", "William");
    localStorage.setItem("age", "8");

    let myName = localStorage.getItem("name");
    console.log(myName);
    let doesNotExist = localStorage.getItem("buriehfiuehife");
    console.log(doesNotExist);

    localStorage.removeItem("name");
    // localStorage.clear();

    localStorage.setItem("recipes", JSON.stringify(recipes));

    let recipesItem = localStorage.getItem("recipes");
    let recipesArray = JSON.parse(recipesItem);
    console.log(recipesArray);
}

main();