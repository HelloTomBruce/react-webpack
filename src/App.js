import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Basic from './component/router/basic'
import Nested from './component/router/nested'
import Login from './component/solid/login'
import './page-less/index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)