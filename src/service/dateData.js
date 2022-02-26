let count = 0;


export function currentWeek(usersLength, calendar) {
  const currentDate = new Date();
  const month = document.querySelector('.month');
  
  const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
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

  const calendarElements = document.querySelectorAll(".calendar__item");
  calendarElements.forEach((el) => el.remove());
  
  for (
    let i = getStartOfWeek();
    i <= getEndOfWeek();
    i = i + 24 * 60 * 60 * 1000
  ) {
    calendar.innerHTML += `
      <div class="calendar__item weekdays__${new Date(i).getDay()}">
                  <h4 class = "weekdays__item">${weeks[new Date(i).getDay()]}</h4>
                  <h4 class="calendar__date">${new Date(i)
                    .toLocaleDateString()
                    .slice(0, 5)}</h4>
                  <div class="calendar__user-fields">
                  </div>
              </div>
      `;
      month.innerHTML = `<h3>${new Date(i).toLocaleString('en', {       
        month: 'long'       
      })}</h3>`
  }
  const cells = document.querySelectorAll(".calendar__user-fields");

  Array.from(cells).map((cell) => {
    let i = 1;
    while (i <= usersLength) {
      cell.innerHTML += `<p data-count=${i} data-date=${cell.previousElementSibling.innerHTML} class = 'cell cell--${i++}'></p>`;
    }

    cell.setAttribute("data-date", `${cell.previousElementSibling.innerHTML}`);
  });
}



export function initButtons(usersLength, calendar) {
  document.getElementById("nextButton").addEventListener("click", () => {
    count += 7;
    currentWeek(usersLength, calendar);
  });

  document.getElementById("backButton").addEventListener("click", () => {
    count -= 7;
    currentWeek(usersLength, calendar);
  });
}
