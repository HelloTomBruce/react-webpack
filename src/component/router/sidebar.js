import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routeConfig = [
    {
        path: '/',
        label: 'home',
        exact: true,
        component: () => <div>home</div>,
        sidebar: () => <div>home</div>
    },
    {
        path: '/about',
        label: 'about',
        exact: true,
        component: () => <div>about</div>,
        sidebar: () => <div>about</div>
    },
    {
        path: '/login',
        label: 'login',
        exact: true,
        component: () => <div>login</div>,
        sidebar: () => <div>login</div>
    }
]

function SideBar () {
    return (
        <Router>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/login'>login</Link>
                        </li>
                    </ul>
                    {routeConfig.map((route, index) => (
                        <Route exact={route.exact} path={route.path} component={route.sidebar} key={index}/>
                    ))}
                </div>
                <div>
                    {routeConfig.map((route, index) => (
                        <Route exact={route.exact} path={route.path} component={route.component} key={index}/>
                    ))}
                </div>
            </div>
        </Router>
    )
}

export default SideBar