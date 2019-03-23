import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import Basic from './component/router/basic'
import Nested from '@/component/router/nested'
import ImgDisplay from '@/component/img'
import './page-less/index.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <ImgDisplay src='https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg'/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)