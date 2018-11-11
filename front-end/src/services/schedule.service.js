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

    getSchedule() {
        return fetch(URL, {
                method: "post",
                body: JSON.stringify(course),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
    }

    findAllCourses() {
        return fetch(URL)
        .then((response) => {
            return response.json();
        })
    }

    updateCourse(courseId, course) {
        return fetch(URL + "/" + courseId, {
            method: "put",
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(function (response) {
            return response.json();
        })
    }
}

export default ScheduleService;