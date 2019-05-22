import React from 'react';
import Test from './test';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { Menu, Segment, } from 'semantic-ui-react';

import Home from './components/Home';
import News from './components/News';
import AddNews from './components/AddNews';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import NewsContent from './components/NewsContent';


function App() {
  return (
    <Router>
      <Segment.Group
        className='main'
        size='big'
        raised
      >
        <Segment>
          <Header />
        </Segment>

        <Segment >
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news' exact component={News} />
            <Route path='/addNews' component={AddNews} />
            <Route path='/contact' component={Contact} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/news/:id' component={NewsContent} />
          </Switch>
        </Segment>
        <Segment>
          <Footer />
        </Segment>
      </Segment.Group>

    </Router>

  );
}

export default App;
