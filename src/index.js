import getTaskData from "./service/TaskData";
import getUserData from "./service/UserData";
const app = document.querySelector("#root");
const user = app.appendChild(document.createElement('ul'))


getUserData(user.classList.add('users__list'));
