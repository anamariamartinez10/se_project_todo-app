import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
// const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
// const addTodoCloseBtn = document.forms[".popup__close"];
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
  const todoElement = generateTodo(formData);
  section.addItem(todoElement);
});

formPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  formPopup.open();
});

// TodoCounter Class
const counter = new TodoCounter(initialTodos, ".counter__text");
counter.updateCompleted();
counter.updateTotal();

// FromValidator class
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
