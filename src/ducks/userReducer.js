import axios from 'axios';

const initialState = {
  user: {},
  toggleLogout: false
}

const GET_DATA = 'GET_DATA'
const LOG_OUT = 'LOG_OUT'

export function getData() {
  let data = axios.get('/auth/user-data').then(res => res.data)
  return {
    type: GET_DATA,
    payload: data
  }
}

export function toggleLogout(){
  return {
    type: LOG_OUT
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA + '_FULFILLED': 
      let makeToggleWork =false
      if (action.payload.id){
        makeToggleWork = true
      }
      return {...state, user: action.payload, toggleLogout: makeToggleWork}
      
    case LOG_OUT:
      return {...state, toggleLogout: true}
    default:         
      return state;
  }
}
