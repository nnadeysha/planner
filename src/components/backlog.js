import { getTaskData } from "../service/TaskData";

const backlog = document.querySelector(".backlog__content");

export const BacklogContent = async (arrUsers) => {
  const cells = document.querySelectorAll(".cell");
  const data = await getTaskData();
  const arrTask = [];
   data.map((task) => {
    if (task.executor === null) {
      backlog.innerHTML += `
            <div class="task__element" draggable="true" data-id="${task.id}">
                <p class="task__description"  data-tooltip="Start:${task.planStartDate} Deadline:${task.planEndDate}">Task:${task.subject}</p>
            </div>
            `;
    } else {
      let dateData = task.planEndDate.replace(/-/gi, ".").slice(5, 10);
      let coverDate = dateData.slice(3, 5) + "." + dateData.slice(0, 2);

      for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].id === task.executor) {
          
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
    arrTask.push(task);
  });

  dragAndDrop(arrTask)
};

function dragAndDrop(arrTask){
   
    const dragItems = document.querySelectorAll(".task__element");
    const dropZones = document.querySelectorAll(".cell");
    const dropUsers = document.querySelectorAll(".users__item");
    let draggedItem = null;
    let droppedItem = null;
    
    dropUsers.forEach((dropUser) => {
      dropUser.addEventListener("dragover", dragOver);
      dropUser.addEventListener("dragenter", dragEnter);
      dropUser.addEventListener("dragleave", dragLeave);
      dropUser.addEventListener("drop", dragDropUser);
    });
  
    dropZones.forEach((dropZone) => {
      dropZone.addEventListener("dragover", dragOver);
      dropZone.addEventListener("dragenter", dragEnter);
      dropZone.addEventListener("dragleave", dragLeave);
      dropZone.addEventListener("drop", dragDrop);
    });
  
    dragItems.forEach((dragItem) => {
      dragItem.addEventListener("dragstart", dragStart);
      dragItem.addEventListener("dragend", dragEnd);
      dragItem.addEventListener("drag", drag);
      dragItem.addEventListener("dragenter", () => {
        if (draggedItem !== droppedItem) {
          droppedItem = dragItem;
        }
      });
      dragItem.addEventListener("dragleave", () => {
        droppedItem = null;
      });
    });
    function dragStart(event) {
      event.dataTransfer.setData("dragItem", this.dataset.id)
      draggedItem = this;
      setTimeout(() => {
        this.classList.add("hide");
      }, 0);
    }
    function dragEnd() {
      this.classList.remove("hide");
      draggedItem = null;
    }
    function dragOver(event) {
      event.preventDefault();
    }
    function dragEnter(event) {
      event.preventDefault();
      this.classList.add("hovered");
      droppedItem = this;
    }
    function dragLeave() {
      this.classList.remove("hovered");
      droppedItem = this;
    }
    function drag() {}
    function dragDrop() {
      this.append(draggedItem);
      this.classList.remove("hovered");
    }
    
    function dragDropUser(event){
        const cellNumber = this.getAttribute("data-user-id");
        const dragFlag = event.dataTransfer.getData("dragItem");
        
        for (let i = 0; i < arrTask.length; i++){
            let dateData = arrTask[cellNumber].planEndDate.replace(/-/gi, ".").slice(5, 10);
            let coverDate = dateData.slice(3, 5) + "." + dateData.slice(0, 2);
            
            const dropZoneFromUser = document.querySelector(`[data-date='${coverDate}']`);
            
           const a = dropZoneFromUser.querySelector(`[data-count='${cellNumber}']`);
           
            a.append(draggedItem);
       } 
         
      
      this.classList.remove("hovered");
    }
    
}
/*  
[data-count='${cellNumber}']
    
    creationAuthor: 1
creationDate: "2022-02-26"
description: ""
endDate: "2022-02-26"
executor: 1
id: "175407f4-eb4f-4864-96aa-0a165f73fe0f"
order: 1
planEndDate: "2022-03-01"
planStartDate: "2022-02-26"
status: 1
subject: "Анализ"*/
