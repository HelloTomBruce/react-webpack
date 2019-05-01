import React, { Component } from "react";
import Notice from "./item";
import collage from "./collage.js";
import "./index.less";

class NoticeBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlList: collage.list
        };
    }

    render() {
        let noticeList = this.state.urlList.map(item => {
            return <Notice {...item} key={item.url} />;
        });

        return <div className="notice-board">{noticeList}</div>;
    }
}

export default NoticeBoard;
