import React, { Component } from "react";
import axios from "axios";
import "./index.less";

class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice:  [],
            bgColor: [
                "#7ea174",
                "#abcc89",
                "#9cc668",
                "#519670",
                "#4f7e57",
                "#008e59",
                "#006e5f",
                "#168570",
                "#2f8f6d",
                "#00b483",
                "#67b4b0"
            ]
        };
        this.showNotification = this.showNotification.bind(this);
        this.getNoticeData = this.getNoticeData.bind(this);
    }

    componentDidMount() {
        this.getNoticeData();
        setInterval(() => {
            this.getNoticeData();
        }, 1000 * 60 * 30);
    }

    getNoticeData() {
        let url =
            `http://localhost:9000/getNotice?url=${encodeURIComponent(
                this.props.url
            )}` +
            `&encodeType=${this.props.encodeType}` +
            `&type=${this.props.type}`;
        axios
            .get(url)
            .then(res => {
                this.setState({
                    notice: res.data.list
                });
                if (+res.data.notice) {
                    this.showNotification();
                }
                return;
            })
            .catch(err => {
                this.setState(err);
            });
    }

    showNotification() {
        Notification.requestPermission(() => {
            let title = "找到关于调剂的信息啦";
            let option = {
                body: `来自${this.props.title}的一则公告中包含调剂信息`,
                icon: "https://picsum.photos/100/100"
            };
            new Notification(title, option);
        });
    }

    render() {
        let noticeList = this.state.notice.map((item, index) => {
            return (
                <a
                    className="notice-one"
                    key={index}
                    href={this.props.host + item.href}
                >
                    {item.text}
                    <span className="time">{item.time}</span>
                </a>
            );
        });
        return (
            <div
                className="notice-one-container"
                style={{
                    background: this.state.bgColor[
                        Math.floor(Math.random() * 11)
                    ]
                }}
            >
                <h3>
                    <a href={this.props.home}>{this.props.title}</a>
                </h3>
                {noticeList}
            </div>
        );
    }
}

export default Notice;
