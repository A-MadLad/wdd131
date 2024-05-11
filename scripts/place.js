window.addEventListener("load", () => {
  const year = document.getElementById("currentyear");
  year.innerHTML = new Date().getFullYear();
});

window.addEventListener("load", () => {
  const modified = document.getElementById("lastModified");
  modified.innerHTML = document.lastModified;
});

function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50) {
    let windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16));
    let rounded = Math.round(windChill);
    document.getElementById("windChill").innerHTML = rounded;
  }
  else {
    document.getElementById("windChill").innerHTML = "N/A";
  }
};

let temperature = 75;
let windSpeed = 9;

calculateWindChill(temperature, windSpeed);