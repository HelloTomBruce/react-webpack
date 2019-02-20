import React, { Component } from 'react'
import axios from 'axios'
import '../component-less/notice.less'

class Notice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notice: [],
            bgColor: [
                '#7ea174',
                '#abcc89',
                '#9cc668',
                '#519670',
                '#4f7e57',
                '#008e59',
                '#006e5f',
                '#168570',
                '#2f8f6d',
                '#00b483',
                '#67b4b0'
            ]
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
            <div className="notice-one-container" style={{'background': this.state.bgColor[Math.floor(Math.random() * 11)]}}>
                <h3><a href={this.props.home}>{this.props.title}</a></h3>
                {noticeList}
            </div>
        )
    }
}

export default Notice