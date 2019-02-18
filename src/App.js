import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Count from './component/count'
import List from './component/list'
import Login from './component/Login'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>hello react-webpack</h1>
                <Count/>
                <List/>
                <Login/>
                <AppLayout/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)