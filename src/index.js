import getTaskData from "./service/TaskData";
import { getUserData } from "./service/UserData";
import "./style/style.css";
import { currentWeek, initButtons } from "./service/dateData";
const app = document.querySelector(".planner");
const users = document.getElementById("users");

getUserData(users);

initButtons();

currentWeek(25);
//getTaskData(app);
