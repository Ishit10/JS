console.log("Jay Bajrangbali");


const countryselect = document.getElementById("countryselect");

function countryoptions() {
    for (const key in )
}



async function corona() {
    const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=ind';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f350207284mshae371415704f599p1c7950jsncae14bf364b2',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
corona();
