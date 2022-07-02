import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';

let BASE_URL = "https://asia-northeast3-fu-webapp.cloudfunctions.net/api/codingTest"
// let BASE_URL = "http://localhost:3000"

function reducer(state = BASE_URL, action){
  if(action.type === "saveUser"){
    state += '/saveUser';
    console.log("state", state)
    return state
  }
  else if(action.type === "saveInquiry"){
    state += '/saveInquiry';
    return state
  }
  else if(action.type === "getUser"){
    state += '/getUser';
    return state
  }
  else if(action.type === "getSingleInquiry"){
    state += '/getSingleInquiry';
    return state
  }
  else if(action.type === "/getEntireInquiry"){
    state += '/getEntireInquiry';
    return state
  }
  else {
    // console.log("state")
    return state
  }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
