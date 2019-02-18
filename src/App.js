import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Count from './component/count'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>hello react-webpack</h1>
                <Count/>
                <AppLayout/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)