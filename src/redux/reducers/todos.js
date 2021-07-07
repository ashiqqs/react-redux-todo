import { ADD_TODO, TOGGLE_TODO } from "../action-types";

const initialState = {
    allIds:[],
    byIds:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case ADD_TODO: {
            const {id, taskName} = action.payload;
            return {
                ...state,
                allIds:[...state.allIds, id],
                byIds:{
                    ...state.byIds,
                    [id]:{
                        taskName,
                        isComplete:false
                    }
                }
            }
        }
        case TOGGLE_TODO:{
            const {id} = action.payload;
            return {
                ...state,
                byIds:{
                    ...state.byIds,
                    [id]:{
                        ...state.byIds[id],
                        isComplete:!state.byIds[id].isComplete
                    }
                }
            }
        }
        default:
            return state;
    }
}