import React from 'react'
import { Button } from 'antd'

class DialogFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        let sureBtn = this.props.sure ? <Button onClick={this.props.sureHandle} type="primary" className='footer-btn'>{this.props.sureText}</Button> : null
        let cancelBtn = this.props.cancel ? <Button onClick={this.props.closeHandle} type="default" className='footer-btn'>{this.props.cancelText}</Button> : null
        return (
            <div className="dialog-footer">
                {sureBtn}{cancelBtn}
            </div>
        )
    }
}

export default DialogFooter