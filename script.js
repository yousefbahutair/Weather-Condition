async function getWeather() {
    const city = document.querySelector("#city").value.trim();
    if(!city){
        alert("Please Enter a country");
        return;
    }
    const apiKey = "86b04950c3739201367738765df1ee2e";
    const url    = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;
    try{
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("An Error occur while bringing data");
        }
        const data = await response.json();
        document.querySelector("#weather").innerHTML =
        `<h2>${data.name} (${data.sys.country})</h2>
        <p> Tempreture: ${data.main.temp}C </p>
        <p> Humidity  : ${data.main.humidity}% </p>
        <p> Wind      : ${data.wind.speed}m/s </p>`; }
        catch(error) {
            document.querySelector("#weather").innerHTML = `<p style="color: red;">${error.message}</p>`;
        }}