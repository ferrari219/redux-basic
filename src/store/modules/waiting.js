import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, text=>text);
export const create = createAction(CREATE, text=>({ text, id:id++ }));
export const enter = createAction(ENTER, id=>id);
export const leave = createAction(LEAVE, id=>id);


const initialState = {
    input: 'start',
    list: [
        {
            id:0,
            name: 'abc',
            entered: true
        },
        {
            id:1,
            name: 'def',
            entered: false
        },
        {
            id:2,
            name: 'hij',
            entered: false
        },
    ]
}

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        return {
            ...state,
            input: action.payload
        }
    },
    [CREATE]: (state, action) => {
        return {
            ...state,
            list: state.list.concat({
                id: action.payload.id,
                name: action.payload.text,
                entered: false
            })
        }
    },
    [ENTER]: (state, action) => {
        return {
            ...state,
            list: state.list.map(
                item => item.id === action.payload
                    ? { ...item, entered: !item.entered } : item
            )
        }
    },
    [LEAVE]: (state, action) => {
        return {
            ...state,
            list: state.list.filter(
                item => item.id !== action.payload
            )
        }
    }
}, initialState);