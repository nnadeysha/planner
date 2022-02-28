import { API_TASKS } from "../constants/const";
export const getTaskData = async () => {
    try {
        let response = await fetch(
            API_TASKS
        );
        const content = await response.json();
        return content;
       
      } catch (e) {
        console.error(e);
      }
  };
  

