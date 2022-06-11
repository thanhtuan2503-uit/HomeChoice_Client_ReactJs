import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Discount from '../pages/Discount'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/discount' component={Discount}/>
        </Switch>
    )
}

export default Routes
