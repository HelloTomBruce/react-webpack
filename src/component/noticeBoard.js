import React, { Component } from "react"
import Notice from "./notice"
import collage from "../api/collage.js"
import "../component-less/noticeBoard.less"

class NoticeBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlList: collage.list
    }
  }

  render() {
    let noticeList = this.state.urlList.map((item, index) => {
      return <Notice {...item} key={item.url} />
    })

    return <div className="notice-board">{noticeList}</div>
  }
}

export default NoticeBoard
