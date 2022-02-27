const API_USERS = `https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/tasks`
export const getTaskData = async (app) => {
    let response = await fetch(
        API_USERS
    );
    const content = await response.json();
    return content;
    
  };
  

