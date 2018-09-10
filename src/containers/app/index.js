import React from 'react'
import { Route, Link } from 'react-router-dom'
import Catalogue from '../catalogue'
import Counter from '../counter'
import Profile from '../profile'
import logo from '../../logo.png'

const App = () => (
  <div>
    <header className={'mainHeader'}>
      <img src={logo} className={'logo'} alt="logo"/>
      <div>
        <Link to="/">catalogue</Link>
        <Link to="/counter">counter</Link>
        <Link to="/profile">profile</Link>
      </div>
    </header>

    <nav>
      <ul>
        <li>Курсы</li>
        <li>Хаб</li>
        <li>Мероприятия</li>
        <li>О нас</li>
      </ul>
    </nav>

    <main>
      <Route exact path="/" component={Catalogue} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/profile" component={Profile} />
    </main>
  </div>
);

export default App
