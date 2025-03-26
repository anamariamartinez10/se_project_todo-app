import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
// const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];

// const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
// const todosList = document.querySelector(".todos__list");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    return generateTodo(item);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

//PopupWithForm class

const formPopup = new PopupWithForm("#add-todo-popup", (formData) => {
  formPopup.setEventListeners();
  formPopup.open();
  formPopup.close();
});

// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

// const closeModal = (modal) => {
//   modal.classList.remove("popup_visible");
// };

// addTodoButton.addEventListener("click", () => {
//   openModal(addTodoPopup);
// });

// addTodoCloseBtn.addEventListener("click", () => {
//   closeModal(addTodoPopup);
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

// Create a date object and adjust for timezone
const date = new Date(dateInput);
date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

const id = uuidv4();
const values = { name, date, id };
const todoElement = generateTodo(values);
section.addItem(todoElement);
closeModal(addTodoPopup);
newTodoValidator.resetValidation();

// TodoCounter Class

// FromValidator class
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
