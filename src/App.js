import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Count from './component/count'
import List from './component/list'
import Login from './component/Login'
import Nav from './component/nav'
import NoticeBoard from './component/noticeBoard'
import ContextComponent from './component/context/index'
import Refs from './component/refs'
import Fragment from './component/fragments'
import Dialog from './component/dialogExample'
import './page-less/index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    dialogClick = () => {
        console.log('dialog click')
    }

    render () {
        let list = [
            {
                title: '1'
            },
            {
                title: '2'
            },
            {
                title: '3'
            },
            {
                title: '4'
            },
            {
                title: '5'
            }
        ]
        return (
            <div>
                {/* <ContextComponent/>
                <Refs/>
                <ul>
                    <Fragment list={list}/>
                </ul>
                <div onClick={this.dialogClick}>
                    <Dialog/>
                </div> */}
                <h1 className="page-title">招生公告</h1>
                <NoticeBoard/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)