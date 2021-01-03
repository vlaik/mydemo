import { PORTAL_STATUS_DISPLAY, 
         ADD_TRACK_VALUE,} from '../action'


export const initialState = {
    showPortal: false,
    showCity: false,
    inputCity: '',
    cities: []
};

export default function showModal(state = initialState, {type, payload}) {
    switch (type) {
        case PORTAL_STATUS_DISPLAY:
            const newCity = [...state.cities,state.inputCity]
            return{
                ...state,
                showPortal: payload.payloadPortal,
                showCity: payload.payloadCity,
                cities: newCity
            }
        case ADD_TRACK_VALUE:
            return{
                ...state,
                inputCity: payload
            }
        default: return{
            ...state
        }
            
    }
}