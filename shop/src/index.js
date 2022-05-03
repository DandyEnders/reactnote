import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// HashRouter = anything beyond hash is ignored in addressbar
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let defaultState = [{ id: 0, name: "goodShoe", quantity: 2 },{ id: 1, name: "niceShoe", quantity: 5 }];

function reducer(state = defaultState, action){
  if (action.type === "increment"){
    let modifiedState = [...state];
    modifiedState[action.index].quantity += 1;
    return modifiedState;
  } else if (action.type === "decrement"){
    let modifiedState = [...state];
    modifiedState[action.index].quantity -= 1;
    return modifiedState;
  } else {
    return state
  }
}
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
