import React, { Component } from "react"
import { connect } from "react-redux"
import { getList } from "../redux/action/list"
import "../component-less/list.less"

class List extends Component {
  componentWillMount() {
    console.log(2323)
    let url = "http://yapi.demo.qunar.com/mock/33880/music/topSwiper"
    this.props.getList(url)
  }
  render() {
    let list = this.props.list.map(item => {
      return (
        <div className="item-one" key={item.id}>
          <img src={item.cover} />
        </div>
      )
    })
    return <div className="list-container">{list}</div>
  }
}

const mapStateToProps = state => ({
  list: state.list.list
})

const mapActionToProps = dispatch => {
  return {
    getList: url => {
      dispatch(getList(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(List)
