import Task from './task';
import buildTasksList from './buildTasksList';

export default class Tasks {
  constructor() {
    this.tasks = [];
    this.containers = {
      tasksListContainer: null,
      tasksListPinnedContainer: null,
    };
    this.searchField = '';
  }

  addTask(taskText) {
    this.tasks.push(new Task(taskText));
    this.searchField = '';
  }

  get commonTasks() {
    return this.tasks.filter((el) => !el.pinned);
  }

  get pinnedTasks() {
    return this.tasks.filter((el) => el.pinned);
  }

  get filteredTasks() {
    if (!this.searchField) {
      return this.commonTasks;
    }
    const searchIn = this.searchField.trim().toLowerCase();
    const array = this.commonTasks.filter((item) => {
      if (String(item.details).toLowerCase().indexOf(searchIn) !== -1) {
        return item;
      }
    });
    return array;
  }

  buildHtml() {
    const callbackBind = this.buildHtml.bind(this);
    buildTasksList(this.filteredTasks, this.containers.tasksListContainer, callbackBind);
    buildTasksList(this.pinnedTasks, this.containers.tasksListPinnedContainer, callbackBind);
  }
}
