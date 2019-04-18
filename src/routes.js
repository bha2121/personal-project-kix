import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/Landing/Landing'
import LoginRegister from './Components/LoginRegister/LoginRegister'
import Browse from './Components/Browse/Browse'
import Sneaker from './Components/Sneaker/Sneaker'
import MyAccount from './Components/MyAccount/MyAccount'
import Profile from './Components/Profile/Profile'
import Portfolio from './Components/Portfolio/Portfolio'
import Cart from './Components/Cart/Cart'

export default (
    <HashRouter>
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={LoginRegister} />
            <Route path='/browse' component={Browse} />
            <Route path='/sneaker' component={Sneaker} />
            <Route path='/myaccount' component={MyAccount} />
            <Route path='/profile' component={Profile} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/cart' component={Cart} />
        </Switch>
    </HashRouter>
)
