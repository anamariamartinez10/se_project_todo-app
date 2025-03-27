export default class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.isComplete).length;
    this._total = todos.length + 1;
    this._updateText();
    this._setEventListeners();
  }

  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
  updateCompleted = (increment) => {
    const change = increment ? 1 : -1;
    if (this._completed + change >= 0) {
      this._completed += change;
      this._updateText();
    }
  };

  updateTotal = (increment) => {
    const change = increment ? 1 : -1;
    if (this._total + change >= 0) {
      this._total += change;
      this._updateText();
    }
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }

  _setEventListeners() {
    this._element.addEventListener("change", (evt) => {
      if (evt.target.checked) {
        this.updateCompleted();
      }
    });
  }
}
