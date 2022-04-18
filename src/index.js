import {React, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store"

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.getElementById('root')
);




