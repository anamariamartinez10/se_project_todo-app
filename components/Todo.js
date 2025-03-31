class Todo {
  constructor(data, selector, handleCheck) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._completed = data.completed;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  // should it be this:
  // this._data = data.name;
  // this._data = data.date;
  // instead of this._data;

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });

    //do I need line 22?
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });

    // this._todoDeleteBtn.addEventListener("click", () => {
    //   this._todoElement.remove();
    // });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDate() {
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._dueDate = new Date(this._data.date);

    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  _toggleCompletion = () => {
    this._completed = !this._completed;
  };

  _remove = () => {
    this._todoElement.remove();
  };

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    todoNameEl.textContent = this._data.name;
    this._generateDate();
    this._generateCheckboxEl();
    this._setEventListeners();
    return this._todoElement;
  }
}

export default Todo;
