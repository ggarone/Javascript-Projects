const apiKey = '839535395cb7604147768791299d89ce';
let counter = 0;
let cardCounter = 0;
let id = 0;
let LI = '';
let flag = false;
let temperatures = [];
let days = [];

$('#city').keyup(function (e) {
    // e.preventDefault();
    if (e.keyCode == 13) {
        let city = $('#city').val();
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        console.log(url);
        let DY = document.querySelector('.dynamic');
        DY.innerHTML = getInitDynamic();
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response);
                response.list.forEach(element => {
                    let time = element.dt_txt.split(" ")[1];
                    let day = element.dt_txt.split(" ")[0];
                    let description = element.weather[0].description;
                    let icon = element.weather[0].icon;
                    let tempMin = Math.round(element.main.temp_min - 273);
                    let tempMax = Math.round(element.main.temp_max - 273);
                    time = time.substring(0, 5);
                    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                    if (counter == 0 && flag == false) {
                        printCurrentWeather(element, iconUrl, tempMin, tempMax);
                    }
                    // exit when all cards are full
                    if (counter > 19)
                        return;
                    // skips every odd time
                    if (cardCounter % 2 != 0) {
                        cardCounter++;
                        return;
                    }

                    // make sure card start on midnight of next day
                    if (time != '00:00' && counter == 0) {
                        return;
                    }

                    temperatures.push(tempMax);
                    days.push(day);

                    // create new card every 5 elemtents
                    if (counter % 5 == 0) {
                        createNewCard(day);
                    }

                    // create redundancy for midnight of next day
                    if (counter % 5 == 0 && counter != 0) {
                        $('#' + id).append(LI);
                        counter++;
                    }

                    addNewLIElement(time, tempMin, description, iconUrl);
                    counter++;
                    cardCounter++;
                });
                populateChart(city);
            }
        });
    }
});

// populates UL with LI elements
function addNewLIElement(time, tempMin, description, iconUrl) {
    LI =
        `
        <li class="list-group-item">
        <p>${time}<span class="desc">${description}</span></p>
        <p>temp: ${tempMin}°</p><img class="" src="${iconUrl}">
        </li>
    `;
    $('#' + id).append(LI);
}

// prints current weather
function printCurrentWeather(element, iconUrl, tempMin, tempMax) {
    let humidity = element.main.humidity;
    let pressure = element.main.pressure;
    let main = element.weather[0].main;
    let att =
        `
        <h2>Meteo Oggi</h2>
        <img src="${iconUrl}">
        <p>min: ${tempMin}
        humidity: ${humidity}
        max: ${tempMax}
        pressure: ${pressure}
        ${main}
        </p>
        `;
    $('#meteoAttuale').append(att);
    flag = true;
}

// create new card
function createNewCard(day) {
    if (counter != 0)
        id++;
    // console.log(`created a new card with counter-> ${counter} id->${id}`);
    let card =
        `
        <div class="card" class="col-3" style="width: 18rem;">
        <h2 class="text-center">${day}</h2>
        <ul class="list-group list-group-flush" id="${id}"></ul>
        </div>
    `
    $('#cards').append(card);
    // $('#'+id).parent().append(`<h2>${day}</h2>`);
}

function getInitDynamic() {
    let dy =
        `
    <div id="meteoAttuale"></div>
    <div class="row">
        <div id="cards"></div>
    </div>
    `
    counter = 0;
    cardCounter = 0;
    id = 0;
    LI = '';
    flag = false;
    temperatures = [];
    days = [];
    return dy;
}

function populateChart(city) {
    console.log(days);
    console.log(temperatures);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: days,
              datasets: [{
                  data: temperatures,
                  label: "Temperatures",
                  borderColor: "#3e95cd",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: `Temperatures of ${city} (in degrees)`
              }
            }
    });
}