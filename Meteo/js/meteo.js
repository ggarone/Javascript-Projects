const apiKey = '';

$('.btn').click(function (e) {
    e.preventDefault();
    let city = $('#city').val();
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response);
            let counter = 0;
            let id = 0;
            response.list.forEach(element => {
                if (counter > 24)
                    return;

                let time = element.dt_txt.split(" ")[1];
                let description = element.weather[0].description;
                let icon = element.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                if (counter == 0) {
                    let tempMin = element.main.temp_min;
                    let tempMax = element.main.temp_max;
                    let humidity = element.main.humidity;
                    let pressure = element.main.pressure;
                    let main = element.weather[0].main;
                    let att =
                        `
                    <h2>Meteo Attuale</h2>
                    <img src="${iconUrl}">
                    <p>min: ${tempMin}</p> <p>humidity: ${humidity}</p>
                    <p>max: ${tempMax}</p> <p>pressure: ${pressure}</p>
                    <p>${main}</p>
                    `;
                    $('#meteoAttuale').append(att);

                }

                if (counter % 6 == 0) {
                    console.log(`created a new card with counter-> ${counter} id->${id}`);
                    let card =
                        `
                    <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush" id="ciao${id}"></ul>
                    </div>
                    `
                    $('#cards').append(card);
                    id++;
                }
                
                $('ul #ciao'+id).append(`<li class="list-group-item">${time} <img src="${iconUrl}"> <p>${description}</p></li>`);
                console.log(`counter ${counter}`);
                counter++;
            });
        }
    });
});
