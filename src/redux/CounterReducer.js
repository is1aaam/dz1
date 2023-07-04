const initialState ={
    counter: 1
}



export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCR_COUNTER' :
            return {...state, counter: state.counter+action.payload}
        case 'DECR_COUNTER' :
            return {...state, counter: state.counter-action.payload}
        default :
            return state

    }
}


//ACTION CREATOR
export const incrCounter = (payload) =>
    ({type: 'INCR_COUNTER', payload:payload})
export const decrCounter = (payload) =>
    ({type: 'DECR_COUNTER', payload:payload})