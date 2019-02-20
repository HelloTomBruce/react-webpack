import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Count from './component/count'
import List from './component/list'
import Login from './component/Login'
import Nav from './component/nav'
import NoticeBoard from './component/noticeBoard'
import './page-less/index.css'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1 className="page-title">招生公告</h1>
                <NoticeBoard/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)