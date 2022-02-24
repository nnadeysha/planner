import getTaskData from "./service/TaskData";
import { getUserData } from "./service/UserData";
import "./style/style.css";
import { currentWeek, initButtons } from "./service/dateData";

const app = document.querySelector(".planner");
const users = document.getElementById("users");

async function usersContent(){
    const data = await getUserData();
    console.log(data);
    const arrUsers = data.map((user) => {
        users.innerHTML += `
                <div class="users__item">
                            <h4 class="users__title" data-user-id= ${user.id}>${user.surname} ${user.firstName}</h4>
                        </div>
                `;
      });
  
      initButtons(arrUsers.length);
      currentWeek(arrUsers.length); 
}
usersContent()

//getTaskData(app);
