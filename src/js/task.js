export default class Task {
  constructor(details) {
    this.details = details;
    this.id = Math.random() + (+new Date());
    this.pinned = false;
  }

  togglePinned() {
    this.pinned = !this.pinned;
  }
}
