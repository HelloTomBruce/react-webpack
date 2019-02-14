import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import AppLayout from './layout/app'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>hello react-webpack</h1>
                <AppLayout/>
            </div>
        )
    }
}

export default App