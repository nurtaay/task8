import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './crud/store';
import App from './App';
import { register } from './serviceWorkerRegistration'; // Импортируем сервисного работника

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

 register();// Регистрируем сервисного работника
