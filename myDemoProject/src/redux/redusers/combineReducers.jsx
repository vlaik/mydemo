import { combineReducers } from 'redux';
import showModal from './showModal';
import dataTime from './dataTime';
import weather from './weather';


export default combineReducers({
    showModal,
    dataTime,
    weather
})