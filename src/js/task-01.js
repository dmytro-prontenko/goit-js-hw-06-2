const generalList = document.querySelector("#categories");
console.log(`Number of categories: ${generalList.children.length}`);

[...generalList.children].forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${Object.keys(el.children[1].children).length}`);
});
