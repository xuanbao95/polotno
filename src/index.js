import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'polotno/model/store';
import './polotno.css'
const  store  = createStore({
  container: document.getElementById('root'),
  key: '', // you can create it here: https://polotno.dev/cabinet/
  // you can hide back-link on a paid licence
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

const page = store.addPage();

page.addElement({
  with:430,
  height:1000,
  type: 'text',
  fill: 'black',
  text: 'hello',
});
store.setSize(414,736,true);
console.log(1.2 * store.scale);
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
