
const getTaskData = async (app) => {
    let response = await fetch(
      `https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/tasks`
    );
    const content = await response.json();
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
  };
  export default getTaskData;