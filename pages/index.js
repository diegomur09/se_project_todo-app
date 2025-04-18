import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {
    console.log("in index.js");
    //TODO- move code from existing submition handeler to here
    console.log(evt.target.name.value);
    console.log(evt.target.date.value);
  },
});

addTodoPopup.setEventListener();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};
const section = new Section({
  items: initialTodos, //pass initials todos
  render: (item) => generateTodo(item),
  //generate todo item
  // add it todo list
  //refer to the forEach loop in this file,
  containerSelector: ".todos__list",
});

section.renderItems();
//call section instances's render items method

/**const openModal = (modal) => {
  modal.classList.add("popup_visible");
};**/

/**const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};**/

// The logic in this function should all be handled in the Todo class.

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

/**addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});**/

/**addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todoElement = generateTodo(values);
  section.addItem(todoElement);
  addTodoForm.reset(); //Use addItem method instead
  addTodoPopup.close();
});**/

/**initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo); Use addItem method instead 
});**/

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
