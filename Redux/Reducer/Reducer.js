import {ADD_USER} from '../Action/Types';

const initialState = {
    userRecord : ""
}

const userReducer = (state = initialState, action) => {
    console.log("UserReducer",action.payload);
    switch(action.type) {
        case ADD_USER : let abc = {...state,...action.payload}
                        return(abc);
        default : return state;
    }
}

export default userReducer;