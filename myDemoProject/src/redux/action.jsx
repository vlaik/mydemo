import axios from 'axios'


export const PORTAL_STATUS_DISPLAY = 'PORTAL_STATUS_DISPLAY';
export const ADD_TRACK_VALUE = 'ADD_TRACK_VALUE';
export const AXIOS_DATA_TRUE = 'AXIOS_DATA_TRUE';


export const chanchePortalStatus = (nextStatusPortal, nextStatusCities) =>{
    return{
        type: PORTAL_STATUS_DISPLAY,
        payload: {
            payloadPortal: nextStatusPortal,
            payloadCity: nextStatusCities
        }
        
    }
    
}

export const addTrackToValue = (value) =>{
    return{
        type: ADD_TRACK_VALUE,
        payload: value
    }
}


export const axiosDataTrue = (getAxios) =>{
    return{
        type: AXIOS_DATA_TRUE,
        payload: getAxios
    }
}


export const axiosData = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data;
        })
        .then(getAxios => dispatch(axiosDataTrue(getAxios)))
    }
}



