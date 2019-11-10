import {ADD_USER} from './Types';

export const AddNewUser = (newUserRecord) => {
    console.log("AddNewUser",newUserRecord);
    return {
        type : ADD_USER,
        payload : newUserRecord
    }
}