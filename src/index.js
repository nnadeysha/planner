import { getUserData } from "./service/UserData";
import "./style/style.css";
import { currentWeek } from "./components/calendar";
import { backlogContent} from "./components/backlog";

let count = 0;
const users = document.querySelector(".js-users");
const calendar = document.querySelector(".js-calendar__container");
const dayOfWeek = 7;
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
  initButtons(arrUsers.length, calendar, count, arrUsers);
  currentWeek(arrUsers.length,calendar, count);
  backlogContent(arrUsers);
}

usersContent();

export function initButtons(usersLength, calendar) {
  document.querySelector(".js-button--next").addEventListener("click", () => {
    count += dayOfWeek;
    currentWeek(usersLength, calendar, count);
  });

  document.querySelector(".js-button--back").addEventListener("click", () => {
    count -= dayOfWeek;
    currentWeek(usersLength, calendar, count);
  });
}

