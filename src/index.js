import { getUserData } from "./service/UserData";
import "./style/style.css";
import { currentWeek } from "./service/dateData";
import { BacklogContent, dragAndDrop } from "./components/backlog";
let count = 0;
const users = document.querySelector(".users");
const calendar = document.querySelector(".calendar__container");
async function usersContent() {
  const data = await getUserData();
  const arrUsers = data.map((user) => {
    
    users.innerHTML += `
                <div class="users__item" data-user-id= ${user.id}>
                            <h4 class="users__title" >${user.surname} ${user.firstName}</h4>
                        </div>
                `;
    return {
      id: user.id,
      surname: user.surname,
      name: user.firstName
    }
  });
  console.log(arrUsers);
  
  initButtons(arrUsers.length, calendar, count, arrUsers);
  currentWeek(arrUsers.length,calendar, count);
  BacklogContent(arrUsers);
}

usersContent();

export function initButtons(usersLength, calendar) {
  document.getElementById("nextButton").addEventListener("click", () => {
    count += 7;
    currentWeek(usersLength, calendar, count);
    
  });

  document.getElementById("backButton").addEventListener("click", () => {
    count -= 7;
    currentWeek(usersLength, calendar, count);
    
  });
}

