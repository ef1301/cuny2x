//ACTION TYPES;
//These action types will be placed inside action objectas and then evaluated by the reducer function in the swtic/case statements

const INCREMENT = 'INCREMENT';

//ACTION CREATOR
//this is the function that will return an action object;
//We will use these in out React components;
export function increment() {
    return {
	type: INCREMENT
    }
}

//NORMALLY this is where thunks would be placed, but since we aren't doing anything asynchronous, we do not need thunks right now;

//reducer function;
export default function counterReducer(state = 0, action) {
    //switch statements
    switch (action.type) {
    case INCREMENT:
	return state + 1;
    default:
	return state;
    }
}

//export default counterReducer;
