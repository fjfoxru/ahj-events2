export default function buildTasksList(arrayList, containerEl, callback) {
  containerEl.innerHTML = '';
  if (arrayList.length) {
    arrayList.forEach((o) => {
      const el = document.createElement('div');
      el.dataset.task = '';
      el.dataset.taskId = o.id;
      el.innerHTML = `<div data-section="details">${o.details}</div>`;

      const button = document.createElement('div');
      button.innerHTML = `<div data-section="details" class="button_pinned" data-task-id="${o.id}" data-action="pin">Закрепить/открепить</div>`;
      button.addEventListener('click', () => {
        const taskToPin = arrayList.findIndex((el) => el.id === o.id);
        if (taskToPin !== -1) {
          arrayList[taskToPin].togglePinned();
          callback();
        }
      });
      el.append(button);
      containerEl.appendChild(el);
    });
  } else {
    console.log('ddd');
    const item = document.createElement('div');
    item.innerHTML = '<div data-section="details">Нет задач</div>';
    containerEl.appendChild(item);
  }
}
