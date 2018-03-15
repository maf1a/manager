import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Text, View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyA85DTH071w1KQfPFjkXrmkPLrHuHYi7vk",
      authDomain: "application-62d7f.firebaseapp.com",
      databaseURL: "https://application-62d7f.firebaseio.com",
      projectId: "application-62d7f",
      storageBucket: "",
      messagingSenderId: "972789652445"
    };
    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
