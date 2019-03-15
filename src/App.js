import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import './page-less/index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <AppLayout/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)