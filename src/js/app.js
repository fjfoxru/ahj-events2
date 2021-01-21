import Tasks from './tasks';
import ErrorHtml from './error';

// Виджет задач
const addTaskWidgetEl = document.querySelector('[data-widget=add-task-widget]');
// Форма добавления задач
const addTaskForm = document.querySelector('[data-form="add-task"]');
// Элемент добавления текста
const addTaskTextEl = addTaskWidgetEl.querySelector('[data-id=add-task-text]');
// Общие задачи
const tasksList = addTaskWidgetEl.querySelector('[data-section=tasks-list]');
// Закрепленные задачи
const tasksListPinned = addTaskWidgetEl.querySelector('[data-section=tasks-list-pinned]');
// Место для ошибок
const addErrorPlace = document.querySelector('[data-section="error"]');
// Все задачи
const allTasks = new Tasks();
const error = new ErrorHtml();

// Отрисовка
allTasks.containers.tasksListContainer = tasksList;
allTasks.containers.tasksListPinnedContainer = tasksListPinned;
allTasks.buildHtml();

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!addTaskTextEl.value) {
    error.text = 'Пустое значение';
    error.errorMoveInHtml(addErrorPlace);
  } else {
    allTasks.addTask(addTaskTextEl.value);
    addTaskTextEl.value = '';
    allTasks.buildHtml();
  }
});

addTaskForm.addEventListener('input', (e) => {
  allTasks.searchField = e.target.value;
  error.errorClear(addErrorPlace);
  allTasks.buildHtml();
});
