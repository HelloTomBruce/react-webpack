import React, { Component } from 'react'
import axios from 'axios'
import '../component-less/notice.less'

class Notice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: []
        }
    }

    componentWillMount () {
        let url =`http://localhost:9000/getNotice?url=${encodeURIComponent(this.props.url)}&encodeType=${this.props.encodeType}`
        axios.get(url).then(res => {
            this.setState({
                notice: res.data
            })
        })
    }

    render () {
        let noticeList = this.state.notice.map((item, index) => {
            return (
                <a className="notice-one" key={index} href={this.props.host + item.href}>
                    {item.text}
                </a>
            )
        })
        return (
            <div className="notice-one-container">
                <h3>{this.props.title}</h3>
                {noticeList}
            </div>
        )
    }
}

export default Notice