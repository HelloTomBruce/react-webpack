import React from "react"

class Cat extends React.Component {
  render() {
    const mouse = this.props.mopuse
    return (
      <span style={{ position: "absolute", left: mouse.x, top: mouse.y }} />
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class MouseTrace extends React.Component {
  render() {
    return (
      <div>
        <h1>move the mouse around</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    )
  }
}

export default MouseTrace
