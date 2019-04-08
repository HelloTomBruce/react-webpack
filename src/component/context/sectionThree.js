import React from "react"
import WithTheme from "../../hoc/withTheme"
import { Button } from "antd"

class SectionTwo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let style = {
      color: this.props.theme.color
    }
    return (
      <section>
        <h1 style={style}>section two {this.props.theme.title}</h1>
      </section>
    )
  }
}

export default WithTheme(SectionTwo)()
