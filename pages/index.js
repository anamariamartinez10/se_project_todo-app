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
const checkbox = document.querySelector(".todo__checkbox");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
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
  counter.updateTotal(true);
});

addTodoButton.addEventListener("click", () => {
  formPopup.open();
});

formPopup.setEventListeners();

// TodoCounter Class
const counter = new TodoCounter(initialTodos, ".counter__text");
// document.addEventListener("todoCheck", counter.updateCompleted);
// document.addEventListener("todoCheck", counter.updateTotal);

function handleCheck(completed) {
  counter.updateCompleted(completed);
}

function handleDelete(completed) {
  completed && counter.updateCompleted(false);
  counter.updateTotal(false);
}

// const handleDelete = (completed) => {
//   completed && counter.updateCompleted(false);
//   counter.updateTotal(false);
// };

// FromValidator class
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
