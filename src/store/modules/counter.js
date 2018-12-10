import { createAction, handleActions } from 'redux-actions';

const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const changeColor = createAction(CHANGE_COLOR, color=>color);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
    color: 'red',
    number: 0
};

export default handleActions({
    [CHANGE_COLOR]: (state, action) => {
        // alert(action.payload);
        return {
            ...state,
            color: action.payload
        }
    },
    [INCREMENT]: (state, action) => {
        return {
            ...state,
            number: state.number + 1
        }
    },
    [DECREMENT]: (state, action) => {
        return {
            ...state,
            number: state.number - 1
        }
    },
}, initialState);
