import React from "react"
import { Button } from "antd"

class ToolBar extends React.Component {
  render() {
    return <Button onClick={this.props.changeTheme}>Change Theme</Button>
  }
}

export default ToolBar
