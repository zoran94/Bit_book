import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from 'react-router-dom';
import Feed from './components/main/feed/Feed';
import Profile from './../app/components/main/Profile';
import People from './components/main/people/People';



class App extends Component {
  render() {
    return (
      <>

        <Header />
        <main className='container sticky-main'>
          <div>
            <Switch >
              <Route path="/user/:id" component={Profile} />
              <Route exact path="/" component={Feed} />
              <Route path="/users" component={People} />
            </Switch>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
