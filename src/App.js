import React, { Component } from "react";

import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import Auth from "./containers/Auth";
import ApiReducer from "./api/reducer";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
    type: 'dark'
  },
});

const store = createStore(ApiReducer, applyMiddleware(thunk));

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Provider store={store}>
            <Auth />
          </Provider>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
