import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
         // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCWQhkG0XCfOM88N8Jl75LCm10gMwKVEA4",
            authDomain: "manager-e1e2a.firebaseapp.com",
            databaseURL: "https://manager-e1e2a.firebaseio.com",
            storageBucket: "manager-e1e2a.appspot.com",
            messagingSenderId: "516575918949"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;