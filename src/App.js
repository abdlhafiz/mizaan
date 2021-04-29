import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Objectives from './components/pages/Objectives';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import Trainings from './components/pages/Trainings';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/objectives' component={Objectives} />
          <Route path='/projects' component={Projects} />
          <Route path='/trainings' component={Trainings} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
