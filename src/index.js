import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*Router*/
import { BrowserRouter } from 'react-router-dom';

/*Redux Provide & store */
import { Provider } from 'react-redux';
import store from './Redux/store'



 
ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

