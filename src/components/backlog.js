import { getTaskData } from "../service/TaskData";

const backlog = document.querySelector(".backlog__content");

export const BacklogContent = async (arrUsers) => {
  const data = await getTaskData();
  const arr = [];
  const arrBacklog = data.map((task) => {
    if (task.executor === null) {
      backlog.innerHTML += `
            <div class="task__element">
                <p class="task__description" data-tooltip="Start:${task.planStartDate} Deadline:${task.planEndDate}">Task:${task.subject}</p>
            </div>
            `;
    } else {
        const cells = document.querySelectorAll('.cell');
        for(let i = 0; i < arrUsers.length; i++){
            if(arrUsers[i].id === task.executor){
                arr.push(arrUsers[i].id);
                let dateData = (task.planStartDate).replace(/-/gi, '.').slice(5, 10);
                let coverDate = dateData.slice(3, 5)+'.'+dateData.slice(0, 2);
                cells.forEach(el =>{ 
                    if(el.getAttribute('data-date') === coverDate && arrUsers[i].id === task.executor){
                        el.innerHTML += `true`
                    }}
                    )
            } 
        }
    }
    
    
    
  });
  console.log(arr)
  
};
/*  
cell.previousElementSibling.innerHTML data-date
let key;
  
    for (key in content) {
      console.log(content[key]);
  
      app.innerHTML += `
      <li class="task__element">
                  <h4>задание:${content[key].subject}</h4>
                  <p>Статус:${content[key].status}</p>
              </li>
      `;
    } 
    
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
