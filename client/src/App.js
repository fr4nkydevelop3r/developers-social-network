import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import ProfileForm from './components/profile-forms/ProfileForm';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Provider store={store}>
        <Router>
          <>
            <Navbar />

            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/register"
                  component={Register}
                ></Route>
                <Route exact path="/login" component={Login}></Route>
                <PrivateRoute
                  exact
                  path="/dashboard"
                  component={Dashboard}
                ></PrivateRoute>
                <PrivateRoute
                  exact
                  path="/profile-form"
                  component={ProfileForm}
                ></PrivateRoute>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
            </section>
          </>
        </Router>
      </Provider>
    </>
  );
};

export default App;
