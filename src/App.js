import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { AddUser } from './components/pages';
import Navigation from './components/partials/navigation';
import Footer from './components/partials/footer';
import Header from './components/partials/header';

import './App.css';
const Main = lazy(() => import('./components/pages/main'));

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main className='App-body'>
        <aside className='App-navigation'>
          <Navigation />
        </aside>
        <Suspense fallback={<Spinner animation='border' />}>
          <Switch>
            <Route path='/categories'>
              <Main />
            </Route>
            <Route exact path='/category/:id'>
              <Main />
            </Route>
            <Route path='/user/new'>
              <AddUser />
            </Route>
            {/* <Route path='/category/new'>
              <AddCategory />
            </Route> */}
            <Redirect from='*' to='/categories' />
          </Switch>
        </Suspense>
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
