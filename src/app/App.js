import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Feed from "./components/main/feed/Feed";
import Profile from "./components/main/profile/Profile";
import People from "./components/main/people/People";
import PostSinglePage from "./components/main/singlePostPage/PostPageDetails";
import Register from "./components/main/register/Register";

class App extends Component {
  render() {

    // if (!localStorage.getItem('user')) {
    //   return (
    //     <>
    //       <Route path='/' component={Register} />
    //     </>
    //   )
    // }

    return (
      <>
        <Header />
        <main className="container sticky-main">
          <div>
            <Switch>
              <Route path="/user/:id" component={Profile} />
              <Route path="/post/:id" component={PostSinglePage} />
              <Route path="/users" component={People} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={Feed} />
            </Switch>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
