export const API_USERS = `https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/users`;
/* const dragItems = document.querySelectorAll(".task__description");
  const dropZones = document.querySelectorAll(".cell");
  let draggedItem = null;
  let droppedItem = null;
  


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
    dragItem.addEventListener('dragenter', ()=>{
        if(draggedItem !== droppedItem){
            droppedItem = dragItem;
        }
    });
    dragItem.addEventListener('dragleave', ()=>{
        droppedItem = null;
    })

  });
  function dragStart(event) {
    draggedItem = this;
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  };
  function dragEnd() {
    this.classList.remove("hide");
    draggedItem = null;
  };
  function dragOver(event) {
    event.preventDefault();
  };
  function dragEnter(event) {
    event.preventDefault();
    this.classList.add("hovered");
    droppedItem = this;
  };
  function dragLeave() {
    this.classList.remove("hovered");
    droppedItem = this;
  };
  function drag(event){

  }
  function dragDrop(event) {
    this.append(draggedItem);
    this.classList.remove("hovered");
}
const cellContent = document.createElement("p");
              cellContent.setAttribute("draggable", "true");
              cellContent.setAttribute("data-id", `${task.id}`);
              cellContent.setAttribute("data-tooltip", `Start:${task.planStartDate} Deadline:${task.planEndDate}`);
              cellContent.classList.add("task__description");
              cellContent.textContent= `${task.subject}`;
              el.append(cellContent); */