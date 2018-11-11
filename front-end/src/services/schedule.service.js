const URL = 'https://sourcing-boston.herokuapp.com/schedule';

const scheduleService = {
    getSchedule
};

function getSchedule(zipcode) {
    return fetch(URL, {
        method: "post",
        body: JSON.stringify({ zipcode }),
        headers: {
            'content-type': 'application/json'
        }
    });
}

export default scheduleService;
