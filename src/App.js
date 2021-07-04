import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Styled from './global/styles/GlobalStyle';
import GlobalStyle from './global/styles/GlobalStyle';
import { AuthProvider } from './global/AuthContext';
import { ThemeStore } from './global/ThemeStore';
import ProtectedRoute from './global/ProtectedRoute';
import Theme from './global/Theme';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ResetPassword from './components/authentication/ResetPassword';
import Dashboard from './components/pages/Dashboard';
import ToggleThemeButton from './components//utilities/ToggleThemeButton'
import Initialize from './components/pages/initialize/Initialize';

const App = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <GlobalStyle />
          <AuthProvider>
            <Styled.WindowContainer>
              <ToggleThemeButton></ToggleThemeButton>
              <Router>
                <Switch>
                  <Route path="/signup" component={Signup}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route
                    path="/reset-password"
                    component={ResetPassword}
                  ></Route>
                  <ProtectedRoute exact path="/" component={Dashboard}></ProtectedRoute>
                  <ProtectedRoute exact path="/initialize" component={Initialize}></ProtectedRoute>

                </Switch>
              </Router>
            </Styled.WindowContainer>
          </AuthProvider>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;
