import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Store from './components/organisms/store';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const { store, fetchChampions, fetchFactions } = Store;

store.dispatch(fetchChampions());
store.dispatch(fetchFactions());

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={Store()}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

