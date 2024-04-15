// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // импортируем Provider
import store from './crud/store'; // импортируем наше хранилище Redux
import App from './App';


ReactDOM.render(
    <Provider store={store}> {/* Оборачиваем корневой компонент в Provider и передаем ему store */}
        <App />
    </Provider>,
    document.getElementById('root')
);

