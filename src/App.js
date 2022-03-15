import React, { Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { AddUser, AddCategory, Main } from './pages';
import Navigation from './components/partials/navigation';
import Footer from './components/partials/footer';
import Header from './components/partials/header';
import history from './helpers/history';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main className='App-body'>
        <Router history={history}>
          <aside className='App-navigation'>
            <Navigation />
          </aside>
          <Suspense fallback={<Spinner animation='border' />}>
            <Switch>
              <Route path='/:id'>
                <Main />
              </Route>
              <Route exact path='/new-user'>
                <AddUser />
              </Route>
              <Route exact path='/new-category'>
                <AddCategory />
              </Route>
              <Redirect from='*' to='/' />
            </Switch>
          </Suspense>
        </Router>
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
