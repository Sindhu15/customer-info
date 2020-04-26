import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'store/store';
import AppContainer from 'containers/AppContainer';

const AppProvider = () => (
    <Provider store={configureStore()}>
        <AppContainer/>
    </Provider>
);

export default AppProvider;
  