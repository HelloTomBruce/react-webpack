import React, { Component } from 'react'
import Nav from '../component/nav'
import '../page-less/index.less'
import '../page-less/index.css'
class Index extends Component {
    render () {
        return (
            <div>
                <h1>home page</h1>
                <Nav/>
            </div>
        )
    }
}

export default Index