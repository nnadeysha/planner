import { API_USERS } from "../constants/const";

export async function getUserData() {
  try {
    let response = await fetch(API_USERS);
    const content = await response.json();
    return content
   
  } catch (e) {
    console.error(e);
  }
}
