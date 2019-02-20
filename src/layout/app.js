import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
// import IndexPage from '../page/Index'
// import AboutPage from '../page/About'

const AppLayout = () => {
    return (
        <div>
            <Route path='/' exact component={IndexPage}/>
            <Route path='/about' component={AboutPage}/>
        </div>
    )
}

const IndexPage = () => {
    return (
        <div>index</div>
    )
}

const AboutPage = () => {
    return (
        <div>about</div>
    )
}

export default AppLayout