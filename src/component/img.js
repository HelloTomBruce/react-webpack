import React from "react"

class ImgDisplay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let style = {
      width:  this.props.width,
      height: this.props.height
    }
    return <img src={this.props.src} style={style} />
  }
}

export default ImgDisplay
