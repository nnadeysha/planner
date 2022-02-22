const API_USERS = `https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/users`;

const getUserData = async (app) => {
    let response = await fetch(
        API_USERS
    );
    const content = await response.json();
    let key;
  
    for (key in content) {
      console.log(content[key]);
  
      app.innerHTML += `
      <li class="task__element">
                  <h4>${content[key].surname} ${content[key].firstName}</h4>
                  
              </li>
      `;
    }
  };
  export default getUserData;