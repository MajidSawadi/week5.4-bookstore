import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import PucblicNavBar from './PucblicNavBar'
import BookDetailPage from './pages/BookDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import ReadingPage from './pages/ReadingPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <PucblicNavBar/>
      <Switch>
        <Route exact path= "/" component={HomePage}/>
        <Route exact path ="/books/:id" component={BookDetailPage}/>
        <Route exact path="/reading" component={ReadingPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
