import { saveToStorage } from "./storage.js";
import { listKey } from "./settings.js";

export const createList = (listItems) => {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";
  console.log(listItems);

  listItems.forEach((item) => {
    let isComplete = "";

    if (item.complete) {
      isComplete = "checked";
    }

    listContainer.innerHTML += `<li><span class="${isComplete}">${item.name}</span> <input ${isComplete} type="checkbox" data-id="${item.id}"/></li>`;

  });

  const checkBoxes = document.querySelectorAll("li input");

  checkBoxes.forEach((box) => {
    box.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    const id = event.target.dataset.id;
    const isComplete = event.target.checked;

    const updatedList = updateList(listItems, id, isComplete);
    saveToStorage(listKey, updatedList);
    createList(updatedList);
  }


}

const updateList = (listItems, id, isComplete) => {

  const itemIndex = listItems.findIndex((item) => {
    if (item.id === parseInt(id)) {
      return true;
    }
  });

  listItems[itemIndex].complete = isComplete;

  return listItems;
}