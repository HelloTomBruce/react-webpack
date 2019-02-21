import React from 'react'

class RefEle extends React.Component {
    constructor (props) {
        super(props)
        this.inputEle = React.createRef()
    }

    componentDidMount () {
        this.inputEle.current.focus()
    }

    render () {
        return (
            <div>
                <CustomerInput refEle={this.inputEle}/>
                <CustomerInput2/>
            </div>
        )
    }
}

class CustomerInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <input ref={this.props.refEle}/>
        )
    }
}

class CustomerInput2 extends React.Component {
    constructor(props) {
        super(props)
        this.inputEle = null
        this.setInputEle = (ele) => {
            this.inputEle = ele
        }
        this.inputEleFocus = () => {
            if (this.inputEle) {
                this.inputEle.focus()
                this.inputEle.value = 'nihao'
            }
        }
    }

    componentDidMount () {
        this.inputEleFocus()
    }

    render () {
        return (
            <input type="text" ref={this.setInputEle}/>
        )
    }
}

export default RefEle