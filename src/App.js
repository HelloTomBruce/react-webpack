import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import RouterDemo from './component/router/index'
import './page-less/index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <RouterDemo/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)