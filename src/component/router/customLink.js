import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"

function CustomLink (props) {
    return (
        <Router>
            <div>
                <Route exact={true} path='/' children={({match}) => {
                    return match ? <Link to='/'>>Home</Link> : <Link to='/'>Home</Link>
                }}/>
                <br/>
                 <Route exact={true} path='/about' children={({match}) => {
                    return match ? <Link to='/about'>>About</Link> : <Link to='/about'>About</Link>
                }}/>
                <Route exact={true} path='/' component={Home}/>
                <Route exact={true} path='/about' component={About}/>
            </div>
        </Router>
    )
}

function Home () {
    return (
        <div>Home</div>
    )
}

function About () {
    return (
        <div>About</div>
    )
}

export default CustomLink