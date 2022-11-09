import { ADD_JOBS, SET_INPUT } from "../constant"

const initState = {
    todos: [],
    todoinput: ''
}


function todoReducer (state = initState,action) {
    switch(action.type) {
        case SET_INPUT: {
            return {
                ...state,
                todoinput : action.payload
            }
        }
        case ADD_JOBS: {
            return {
                ...state,
                todos : [...state.todos,action.payload]
            }
        }
        default :{
            return state;
        }
    }
}

export default todoReducer