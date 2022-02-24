import { API_USERS } from "../constants/const";
let usersLength;
export async function getUserData  (users) {
    try{
        let response = await fetch(API_USERS);
        const content = await response.json();
       
       
        content.map((user) => {
          users.innerHTML += `
              <div class="task__element">
                          <h4 data-user-id= ${user.id}>${user.surname} ${user.firstName}</h4>
                          
                      </div>
              `;
        });
        
    } catch (e){
        console.error(e)
    }
  
};



