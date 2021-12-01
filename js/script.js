import { saveToStorage, getFromStorage } from "./storage.js";
import { createList } from "./createList.js";
import { listKey } from "./settings.js";

const listInput = document.querySelector("input");
const button = document.querySelector("button");

const todos = getFromStorage(listKey);
createList(todos);

const addToList = () => {
  const itemValue = listInput.value.trim();
  if (itemValue.length >= 1) {
    const newItem = { id: Date.now(), name: itemValue };
    todos.push(newItem);
    listInput.value = "";
    listInput.focus();

    createList(todos);
    saveToStorage(listKey, todos);
  }
  console.log(todos);

}

button.addEventListener("click", addToList);

