import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routeConfig = [
    {
        path: '/',
        component: Home,
        routes: []
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: '/about/us',
                component: AboutUs,
                routes: []
            },
            {
                path: '/about/you',
                component: AboutYou,
                routes: []
            }
        ]
    }
]

function Nesting() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                {routeConfig.map((route, index) => (
                    <RouteWithSub {...route} key={index}/>
                ))}
            </div>
        </Router>
    )
}

function RouteWithSub(route) {
    return (
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes} />
        )} />
    )
}

function Home() {
    return (
        <div>Home</div>
    )
}

function About(props) {
    return (
        <div>
            <div>About</div>
            <ul>
                <li>
                    <Link to='/about/us'>Us</Link>
                </li>
                <li>
                    <Link to='/about/you'>You</Link>
                </li>
            </ul>
            {props.routes.map((route, index) => (
                <RouteWithSub {...route} key={index}/>
            ))}
        </div>
    )
}

function AboutUs() {
    return (
        <div>about us</div>
    )
}

function AboutYou() {
    return (
        <div>
            about you
        </div>
    )
}

export default Nesting