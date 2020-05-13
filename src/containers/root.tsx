import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../store/configure-store';
import { AppState } from '../store/interfaces';
import { AsyncApp } from './async-app';

const initialStore: AppState = {
    selectedSubreddit: 'frontend',
    postsBySubreddit: {},
};

const store = configureStore(initialStore);

export const Root = () => {
    return (
        <Provider store={store}>
            <AsyncApp />
        </Provider>
    );
};
