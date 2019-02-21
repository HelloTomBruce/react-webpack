import React from 'react'
import { Icon } from 'antd'

class DialogHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props)
        let closeIcon = <span className='close-icon' onClick={this.props.closeHandle}>
                            <Icon type="close"/>
                        </span>
        return (
            <div className='dialog-header'>
                <h3 className="dialog-header-title">{this.props.title}</h3>
                {this.props.showClose ? closeIcon : null}
            </div>
        )
    }
}

export default DialogHeader