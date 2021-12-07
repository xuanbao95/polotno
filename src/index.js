import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'polotno/model/store';
import './polotno.css'
import './index.scss'
const store = createStore({
  container: document.getElementById('root'),
  key: 'L135rEHrIWVtFugMsn-A', // you can create it here: https://polotno.dev/cabinet/
  // you can hide back-link on a paid licence
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

const page = store.addPage();
store.setSize(414, 736, true);
ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
