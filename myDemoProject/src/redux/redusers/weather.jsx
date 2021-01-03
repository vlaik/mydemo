import { AXIOS_DATA_TRUE } from '../action'


export const initialState = {
    getAxios: []
};



export default function weather(state = initialState, { type, payload}){
    switch (type) {
        case AXIOS_DATA_TRUE:
            return{
                ...state,
                getAxios: payload
            }
        default:
            return {
                ...state
            }
    }
}