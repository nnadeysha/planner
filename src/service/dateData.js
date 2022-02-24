let clicked = null;
let tasks = [];
let count = 0;



export function currentWeek() {
 
  
  const weekDays = document.getElementById("calendar");

  const currentDate = new Date();

  function getStartOfWeek() {
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    return Date.parse(currentDate);
  }
  function getEndOfWeek() {
    currentDate.setDate(
      currentDate.getDate() -
        currentDate.getDay() +
        (currentDate.getDay() ? 7 : 0)
    );
    return Date.parse(currentDate);
  }
  if (count !== 0) {
    currentDate.setDate(new Date().getDate() + count);
  }

  weekDays.innerHTML = "";
  for (
    let i = getStartOfWeek();
    i <= getEndOfWeek();
    i = i + 24 * 60 * 60 * 1000
  ) {
    weekDays.innerHTML += `
      <div class="calendar__item">
                  <h4>${new Date(i).toLocaleDateString().slice(0, 5)}</h4>
                  <div class="calendar__user-fields">
                  </div>
              </div>
      `;
  }
  const cells = document.querySelectorAll(".calendar__user-fields");

  Array.from(cells).map((cell) => {
    let i = 1;
    while (i <=25
      ) {
      cell.innerHTML += `<p data-count=${i} class = 'cell cell--${i}'>${i++}</p>`;
    }

    cell.setAttribute("data-date", `${cell.previousElementSibling.innerHTML}`);
  });

}
export function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    count += 7;
    currentWeek();
  });

  document.getElementById("backButton").addEventListener("click", () => {
    count -= 7;
    currentWeek();
  });
}
