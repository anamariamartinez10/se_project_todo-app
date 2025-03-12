// const generateTodo = (data) => {
//   const todoElement = todoTemplate.content
//     .querySelector(".todo")
//     .cloneNode(true);
//   const todoNameEl = todoElement.querySelector(".todo__name");
//   const todoCheckboxEl = todoElement.querySelector(".todo__completed");
//   const todoLabel = todoElement.querySelector(".todo__label");
//   const todoDate = todoElement.querySelector(".todo__date");
//   const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

//      todoNameEl.textContent = data.name;
//   todoCheckboxEl.checked = data.completed;

// todoCheckboxEl.id = `todo-${data.id}`;
//   todoLabel.setAttribute("for", `todo-${data.id}`);
// if (!isNaN(dueDate)) {
//     todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })}`;
//   }
