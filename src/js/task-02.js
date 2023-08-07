const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

/*
│ =====================================
│      append all elements at once
│ =====================================
*/

// const itemsToAppend = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });

// listOfIngredients.append(...itemsToAppend);

/*
│ =======================================================
│      append all elements at once using Function
│ =======================================================
*/

// const itemsToAppend = ingredients => {
//   return ingredients.map((ingredient) => {
//     const li = document.createElement("li");
//     li.textContent = ingredient;
//     li.classList.add("item");
//     return li;
//   });
// };

// const listToAppend = itemsToAppend(ingredients);

// listOfIngredients.append(...listToAppend);

/*
│ =====================================
│      insert all elements at once
│ =====================================
*/
const itemsToInsert = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");

listOfIngredients.insertAdjacentHTML("beforeend", itemsToInsert);
