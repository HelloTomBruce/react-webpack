import React from "react"

class Fragment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let liEle = this.props.list.map(item => {
      return <li key={item.title}>{item.title}</li>
    })
    return <>{liEle}</>
  }
}

export default Fragment
