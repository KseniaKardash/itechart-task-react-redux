import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Galery from './src/components/Galery/Galery';

const store = configureStore();

render(
    <Provider store={store}>
        <Galery />
    </Provider>,
    document.getElementById('app')
);
