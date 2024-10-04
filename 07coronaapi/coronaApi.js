$(document).ready(function () {
    // Base URL for COVID-19 data API
    const apiUrl = "https://disease.sh/v3/covid-19/countries";

    // Function to fetch data and render it
    function fetchData() {
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function (data) {
                renderCountries(data);
            },
            error: function () {
                alert("Error fetching data from the API");
            }
        });
    }

    // Render data
    function renderCountries(data) {
        $("#country-data").empty();
        data.forEach(country => {
            const countryCard = `
                <div class="col-md-4">
                    <div class="country-card">
                        <h3>${country.country}</h3>
                        <p><strong>Cases:</strong> ${country.cases}</p>
                        <p><strong>Deaths:</strong> ${country.deaths}</p>
                        <p><strong>Recovered:</strong> ${country.recovered}</p>
                        <img src="${country.countryInfo.flag}" alt="Flag of ${country.country}" width="50">
                    </div>
                </div>`;
            $("#country-data").append(countryCard);
        });
    }

    // Fetch data when page loads
    fetchData();

    // Search function
    $("#search-country").on("input", function () {
        const value = $(this).val().toLowerCase();
        $(".country-card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
