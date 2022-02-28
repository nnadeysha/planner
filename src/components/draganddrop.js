export function dragAndDrop(arrTask) {
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
  
    function dragDropUser(event) {
      const cellNumber = this.getAttribute("data-user-id");
  
      for (let i = 0; i < arrTask.length; i++) {
        let dateData = arrTask[cellNumber].planStartDate
          .replace(/-/gi, ".")
          .slice(5, 10);
        let coverDate = dateData.slice(3, 5) + "." + dateData.slice(0, 2);
  
        const dropZoneFromUser = document
          .querySelector(`[data-date='${coverDate}']`)
          .querySelector(`[data-count='${cellNumber}']`);
        dropZoneFromUser.append(draggedItem);
      }
  
      this.classList.remove("hovered");
    }
  }
  