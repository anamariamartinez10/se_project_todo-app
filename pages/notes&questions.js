// where is the class Date defined?
// should date have it's own js file

// clarity on understanding the structure of how to instantiate a class
// constructing it in it's own file

// javascript is not strongly typed
// java and python they are strongly defined
// javascript
// typescript works more like java and python that is more strongly typed
// procedural vs OOP

// Old Code:
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
// Date is a default JS class *
// const dateInput = evt.target.date.value;
// const date = new Date(dateInput);
// date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

// const id = uuidv4();
// const values = { name, date, id };
// const todoElement = generateTodo(values);
// section.addItem(todoElement);
// closeModal(addTodoPopup);
// newTodoValidator.resetValidation();
