import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </>
  );
}

export default App;
