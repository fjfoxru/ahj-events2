export default class ErrorHtml {
  constructor(text) {
    this.text = text;
  }

  errorMoveInHtml(container) {
    const error = document.createElement('div');
    error.innerHTML = `Внимание: ${this.text}`;
    container.append(error);
  }

  errorClear(container) {
    container.innerHTML = '';
  }
}
