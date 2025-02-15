import { combineReducers } from "redux";






// const rootReducer = combineReducers({

// });

type initialStateType = {
    counter: number,
    name: string
}
type actionType = {
    type: string,
    payload: any
}

const initialState: initialStateType = {
    counter: 0,
    name: 'vamsi krishna'
}

const rootReducer = function (state: initialStateType = initialState, action: actionType) {
    console.log(state, action);
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}

export default rootReducer;