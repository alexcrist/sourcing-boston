const URL = 'https://sourcing-boston.herokuapp.com/schedule';

let _singleton = Symbol();
class ScheduleService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ScheduleService(_singleton);
        return this[_singleton]
    }

    getSchedule(zipcode) {
        return fetch(URL, {
                method: "post",
                body: JSON.stringify(zipcode),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
    }
}

export default ScheduleService;