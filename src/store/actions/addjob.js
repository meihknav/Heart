import { ADD_JOBS } from "../constant";

function addJob (payload) {
    return {
        type: ADD_JOBS,
        payload
    }
}

export default addJob