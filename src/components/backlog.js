import { getTaskData } from "../service/TaskData";
import { dragAndDrop } from "./draganddrop";
const backlog = document.querySelector(".js-backlog__content");

export const backlogContent = async (arrUsers) => {
  const cells = document.querySelectorAll(".cell");
  const data = await getTaskData();
  const arrTask = [];
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString()
  .slice(0, 5);
  console.log(currentDay);
  data.map((task) => {
    arrTask.push(task);
  });
  taskInCellCreate(arrTask, arrUsers);
  backlogCreate(arrTask);
  dragAndDrop(arrTask);

  document.querySelectorAll(".js-header__button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".cell").forEach(cell=>{
        if(cell.getAttribute("data-date") === currentDay ){
          cell.classList.add("today")
        }
      })
      taskInCellCreate(arrTask, arrUsers);
      dragAndDrop(arrTask);
    });
  });
  cells.forEach(cell=>{
    if(cell.getAttribute("data-date") === currentDay ){
      cell.classList.add("today")
    }
  })
  
};

function backlogCreate(arrTask) {
  arrTask.map((task) => {
    if (task.executor === null) {
      backlog.innerHTML += `
            <div class="task__element" draggable="true" data-id="${task.id}">
                <p class="task__description"  data-tooltip="Start:${task.planStartDate} Deadline:${task.planEndDate}">${task.subject}</p>
            </div>
            `;
    }
  });
}

function taskInCellCreate(arrTask, arrUsers) {
  const cells = document.querySelectorAll(".cell");
  arrTask.map((task) => {
    if (task.executor !== null) {
      for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].id === task.executor) {
          let dateData = task.planStartDate.replace(/-/gi, ".").slice(5, 10);
          let coverDate = dateData.slice(3, 5) + "." + dateData.slice(0, 2);
          cells.forEach((el) => {
            if (
              el.getAttribute("data-date") === coverDate &&
              +el.getAttribute("data-count") === arrUsers[i].id
            ) {
              const cellContent = document.createElement("div");
              cellContent.setAttribute("draggable", "true");
              cellContent.setAttribute("data-id", `${task.id}`);
              cellContent.classList.add("task__element");
              el.appendChild(cellContent);

              cellContent.innerHTML += `<p class="task__description"   data-tooltip="Start:${task.planStartDate} Deadline:${task.planEndDate}">${task.subject}</p>`;
            }
          });
        }
      }
    }
  });
}
