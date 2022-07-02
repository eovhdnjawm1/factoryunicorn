import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;  
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body, html {
  line-height: 1;
  width: 100vw;
  margin: 0 auto;
  
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing:border-box;
}
`

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
      <GlobalStyle />
    <App />
    </Provider>
  </React.StrictMode>
);
