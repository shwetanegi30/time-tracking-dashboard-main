const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const CardAll = document.querySelectorAll("card");
const ellipsisIcon = document.getElementById("ellipsis-icon");
const cardBody =document.querySelectorAll("card-body");
let timeHour = document.querySelectorAll("time-hour");
let text = document.querySelectorAll("text");

fetch('./data.json', {
    method: 'GET'
})
.then(function(response) {return response.json(); })
.then(function(json) {
    console.log(json)
});

dailyBtn.addEventListener("click", (event) => {
  CardAll.forEach((element) => {

    for (let i = 0; i < data.length; i++) {
      timeHour[i].textContent =
        data[i].timeframes.daily.current +
        (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
      text[i].textContent =
        "previous - " +
        data[i].timeframes.daily.previous +
        (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
    }
  });
  changeActive(dailyBtn, weeklyBtn, monthlyBtn);
  event.preventDefault();
});


weeklyBtn.addEventListener("click", (event) => {
    CardAll.forEach((element) => {

      for (let i = 0; i < data.length; i++) {
        timeHour[i].textContent = data[i].timeframes.weekly.current + "hrs";
        text[i].textContent =
          "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      }
    });
    changeActive(weeklyBtn, monthlyBtn, dailyBtn);
    event.preventDefault();
  });

  monthlyBtn.addEventListener("click", (event) => {
    CardAll.forEach((element) => {

      for (let i = 0; i < data.length; i++) {
        timeHour[i].textContent = data[i].timeframes.monthly.current + "hrs";
        text[i].textContent =
          "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
      }
    });
    changeActive(monthlyBtn, weeklyBtn, dailyBtn);
    event.preventDefault();
  });
  
    requestData();

    function changeActive(element, previousActive1, previousActive2) {
        previousActive1.classList.remove("active");
        previousActive2.classList.remove("active");
        element.classList.add("active");
      }

      function extraInfo() {

        let closedWork = false;

        ellipsisIcon.addEventListener("click", () => {
            
            if (!closedWork) {
              CardAll.classList.remove("hidden");
              cardBody[0].classList.remove("border-radius");
              cardBody[0].classList.add("border-top-radius");
              closedWork = true;
              
            } else {
              CardAll.classList.add("hidden");
              cardBody[0].classList.add("border-radius");
              cardBody[0].classList.remove("border-top-radius");
              closedWork = false;
            }
          });
        }
        extraInfo();






















