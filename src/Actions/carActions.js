//Action Types
export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//Action Creators

export const addNewCar = (newCar) => {
    return{
type:ADD_NEW_FEATURE,
payload:newCar
}
}
export const removeFeature = (remove) => {
    return {
        type:REMOVE_FEATURE,
        payload:remove
    }
}


