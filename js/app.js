document.querySelector("#btnSearch").addEventListener("click", callApi);

function callApi() {
  let city = document.querySelector(".weatherInput").value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f22556600fe944aa9c6db91bdf73fbaf&units=metric`
  )
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      let temp = Math.round(res.main.temp);
      let min = Math.round(res.main.temp_min);
      let max = Math.round(res.main.temp_max);
      let longDesc = res.weather[0].main;
      let shortDesc = res.weather[0].description;

      document.querySelector(".output").innerHTML = `
      <h1 class="temp">${temp}°</h1>
      <img src="http://openweathermap.org/img/wn/${
        res.weather[0].icon
      }@2x.png" alt="" />
      `;
      document.querySelector(".minmax").innerHTML = `<h3>Min: ${min}</h3>
      <h3>Max: ${max}</h3>`;
      document.querySelector(
        ".description"
      ).innerHTML = `<p>${longDesc}</p> <p>${shortDesc}</p>`;
    });
}