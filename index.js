const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");

const gameHElem = document.getElementById("gameH1");
const studyHElem = document.getElementById("studyH1");
const workHElem = document.getElementById("workH1");
const exerciseHElem = document.getElementById("exerciseH1");
const socialHElem = document.getElementById("socialH1");
const careHElem = document.getElementById("careH1");

const gamePElem = document.getElementById("gameP1");
const studyPElem = document.getElementById("studyP1");
const workPElem = document.getElementById("workP1");
const exercisePElem = document.getElementById("exerciseP1");
const socialPElem = document.getElementById("socialP1");
const carePElem = document.getElementById("careP1");

dailyButton.addEventListener("click", () => {
  dailyButton.classList.add("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.remove("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.daily.current}hrs`;
        workPElem.innerHTML = `Last Day - ${data[0].timeframes.daily.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.daily.current}hrs`;
        gamePElem.innerHTML = `Last Day - ${data[1].timeframes.daily.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        studyPElem.innerHTML = `Last Day - ${data[2].timeframes.daily.previous}hrs`;
        exerciseHElem.innerHTML = `${data[3].timeframes.daily.current}hrs`;
        exercisePElem.innerHTML = `Last Day - ${data[3].timeframes.daily.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.daily.current}hrs`;
        socialPElem.innerHTML = `Last Day - ${data[4].timeframes.daily.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.daily.current}hrs`;
        carePElem.innerHTML = `Last Day - ${data[5].timeframes.daily.previous}hrs`;
      });
  };

  fetchData();
});

weeklyButton.addEventListener("click", () => {
  dailyButton.classList.remove("active");
  weeklyButton.classList.add("active");
  monthlyButton.classList.remove("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
        workPElem.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
        gamePElem.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
        studyPElem.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        exerciseHElem.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
        exercisePElem.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
        socialPElem.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
        carePElem.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
      });
  };

  fetchData();
});

monthlyButton.addEventListener("click", () => {
  dailyButton.classList.remove("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.add("active");

  const fetchData = async () => {
    await fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        workHElem.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
        workPElem.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
        gameHElem.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
        gamePElem.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
        studyHElem.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
        studyPElem.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
        exerciseHElem.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
        exercisePElem.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
        socialHElem.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
        socialPElem.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
        careHElem.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
        carePElem.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
      });
  };

  fetchData();
});

































// const ellipsisIcon = document.getElementById("ellipsis-icon");
// const cardBody =document.querySelectorAll("card-body-title");
// let timeHour = document.querySelectorAll("time-hour");
// let text = document.querySelectorAll("text");

// function requestData() {
//   fetch('./data.json')
//    .then(response => response.json())
//    .then((data) => {
//     console.log (data)
//    })
// }

// dailyBtn.addEventListener("click", (event) => {
//   CardAll.forEach((element) => {

//     for (let i = 0; i < data.length; i++) {
//       timeHour[i].textContent =
//         data[i].timeframes.daily.current +
//         (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
//       text[i].textContent =
//         "previous - " +
//         data[i].timeframes.daily.previous +
//         (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
//     }
//   });
//   changeActive(dailyBtn, weeklyBtn, monthlyBtn);
//   event.preventDefault();
// });


// weeklyBtn.addEventListener("click", (event) => {
//     CardAll.forEach((element) => {

//       for (let i = 0; i < data.length; i++) {
//         timeHour[i].textContent = data[i].timeframes.weekly.current + "hrs";
//         text[i].textContent =
//           "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
//       }
//     });
//     changeActive(weeklyBtn, monthlyBtn, dailyBtn);
//     event.preventDefault();
//   });

//   monthlyBtn.addEventListener("click", (event) => {
//     CardAll.forEach((element) => {

//       for (let i = 0; i < data.length; i++) {
//         timeHour[i].textContent = data[i].timeframes.monthly.current + "hrs";
//         text[i].textContent =
//           "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
//       }
//     });
//     changeActive(monthlyBtn, weeklyBtn, dailyBtn);
//     event.preventDefault();
//   });
  
//     requestData();

//     function changeActive(element, previousActive1, previousActive2) {
//         previousActive1.classList.remove("active");
//         previousActive2.classList.remove("active");
//         element.classList.add("active");
//       }

//       function extraInfo() {

//         let closedWork = false;

//         ellipsisIcon.addEventListener("click", () => {
            
//             if (!closedWork) {
//               CardAll.classList.remove("hidden");
//               cardBody[0].classList.remove("border-radius");
//               cardBody[0].classList.add("border-top-radius");
//               closedWork = true;
              
//             } else {
//               CardAll.classList.add("hidden");
//               cardBody[0].classList.add("border-radius");
//               cardBody[0].classList.remove("border-top-radius");
//               closedWork = false;
//             }
//           });
//         }
//         extraInfo();



