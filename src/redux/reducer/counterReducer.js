// reducer is a function that takes 2 parameters
// one is current state, second is the action
// based on this action it returns the new state

// two can be used if-else or switch-case for conditional code (if-else is used in this case for simplicity)

const counter = {
    count : 0,
}

function counterReducer(state, action){
    if(action.type === 'count/increased'){
        return{
            ...state,
            count : state.count + 1,
        }
    }else if(action.type === 'count/decreased'){
        return {
            ...state,
            count : state.count - 1,
        }
    }else {
        return{
            ...state,
            count : 0,
        }
    }
}

export default counterReducer;