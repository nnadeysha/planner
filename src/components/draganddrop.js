

let maxCountOfChildren = 2;

export function dragAndDrop(arrTask, itemsLocalSt) {
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
      event.dataTransfer.setData("dragItem", this.dataset.id);
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
      if(this.childNodes.length <= maxCountOfChildren){
        this.classList.remove('overflow-scroll')
      }
    }
    function dragEnter(event) {
      event.preventDefault();
      this.classList.add("hovered");
      droppedItem = this;
    
      if(this.childNodes.length <= maxCountOfChildren){
        this.classList.remove('overflow-scroll')
      }
    }
    function dragLeave() {
      this.classList.remove("hovered");
      droppedItem = this;
      if(this.childNodes.length <= maxCountOfChildren){
        this.classList.remove('overflow-scroll')
      }
    }
    
    function dragDrop(event) {
      const draggetItemID = event.dataTransfer.getData("dragItem");
      this.append(draggedItem);
      
        if(this.childNodes.length > maxCountOfChildren){
          this.classList.add('overflow-scroll')
        }
      
      const item = {
        date: this.getAttribute("data-date"),
        position: this.getAttribute("data-count"),
        taskID: draggetItemID
      };
      itemsLocalSt.push(item);
      localStorage.setItem('items', JSON.stringify(itemsLocalSt))
      
      this.classList.remove('hovered')
    }
  
    function dragDropUser(event) {
      const draggetItemID = event.dataTransfer.getData("dragItem");
      const cellNumber = this.getAttribute("data-user-id");
      const arrDropZones = [];
      for (let i = 0; i < arrTask.length; i++) {
        let dateData = arrTask[cellNumber].planStartDate
          .replace(/-/gi, ".")
          .slice(5, 10);
        let coverDate = dateData.slice(3, 5) + "." + dateData.slice(0, 2);
  
        const dropZoneFromUser = document
          .querySelector(`[data-date='${coverDate}']`)
          .querySelector(`[data-count='${cellNumber}']`);
        dropZoneFromUser.append(draggedItem);
        if(dropZoneFromUser.childNodes.length > maxCountOfChildren){
          dropZoneFromUser.classList.add('overflow-scroll')
        }
        this.classList.remove('hovered')
        arrDropZones.push(dropZoneFromUser);
      }
      for(let j = 0; j <arrDropZones.length - 24; j++){
      const item = {
        date: arrDropZones[j].getAttribute("data-date"),
        position: arrDropZones[j].getAttribute("data-count"),
        taskID: draggetItemID
      };
      itemsLocalSt.push(item);
      localStorage.setItem('items', JSON.stringify(itemsLocalSt))
      }
    }
    
  }
 