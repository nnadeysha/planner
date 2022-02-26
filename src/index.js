import { getUserData } from "./service/UserData";
import "./style/style.css";
import { currentWeek, initButtons } from "./service/dateData";
import { BacklogContent } from "./components/backlog";

const users = document.querySelector(".users");
const calendar = document.querySelector(".calendar__container");
async function usersContent() {
  const data = await getUserData();
  const arrUsers = data.map((user) => {
    
    users.innerHTML += `
                <div class="users__item">
                            <h4 class="users__title" data-user-id= ${user.id}>${user.surname} ${user.firstName}</h4>
                        </div>
                `;
    return {
      id: user.id,
      surname: user.surname,
      name: user.firstName
    }
  });
  console.log(arrUsers);

  initButtons(arrUsers.length, calendar);
  currentWeek(arrUsers.length,calendar);
  BacklogContent(arrUsers);
  
}
usersContent();



