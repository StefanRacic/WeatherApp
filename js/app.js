document.querySelector("#btnSearch").addEventListener("click", callApi);

function callApi() {
  let city = document.querySelector(".weatherInput").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f22556600fe944aa9c6db91bdf73fbaf&units=metric`
  )
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      let round = Math.round(res.main.temp);
      let temp = round;
      let min = Math.round(res.main.temp_min);
      let max = Math.round(res.main.temp_max);
      let longDesc = res.weather[0].main;
      let shortDesc = res.weather[0].description;

      document.querySelector(".output").innerHTML = `
      <h1 class="temp animated fadeIn slow">${temp}°</h1>
      <img class="animated fadeIn slow" src="http://openweathermap.org/img/wn/${
        res.weather[0].icon
      }@2x.png" alt="" />
      `;
      document.querySelector(
        ".minmax"
      ).innerHTML = `<h3 class="animated fadeInDown">Min: ${min}</h3>
      <h3 class="animated fadeInDown">Max: ${max}</h3>`;
      document.querySelector(
        ".description"
      ).innerHTML = `<p class="animated fadeIn slow">${longDesc}</p> <p class="animated fadeIn slow">${shortDesc}</p>`;
    });
}
