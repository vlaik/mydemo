import { DateTime } from 'luxon'

const time = DateTime.local()


export const initialState = time.c
console.log(initialState)

export default function dataTime(state = initialState,{type, payload}){
    return{
        ...state,
    }
}