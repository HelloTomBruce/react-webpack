import React from 'react'

class ImgDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                width: '300px',
                height: '200px'
            }
        }
    }
    render () {
        return (
            <img src={this.props.src} style={this.state.style}/>
        )
    }
}

export default ImgDisplay