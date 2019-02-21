import React from 'react'
import ReactDom from 'react-dom'

const dialogRoot = document.getElementById('dialog-root')

class DialogPortal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
        this.el.className = 'dialog-mask'
    }

    componentDidMount () {
        dialogRoot.appendChild(this.el)
        console.log(dialogRoot)
    }

    componentWillUnmount () {
        dialogRoot.removeChild(this.el)
    }

    render () {
        return ReactDom.createPortal(this.props.children, this.el)
    }
}

export default DialogPortal