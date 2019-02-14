import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../page/Index'
import AboutPage from '../page/About'

const AppLayout = () => {
    return (
        <Switch>
            <Route path='/' exact component={IndexPage}/>
            <Route path='/about' component={AboutPage}/>
            <Redirect to='/'/>
        </Switch>
    )
}

export default AppLayout