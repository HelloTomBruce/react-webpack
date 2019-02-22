import React from 'react'
import { Modal } from 'antd'
import '../component-less/modalWrapper.less'

class WrapperModal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            width: this.props.width || this.sizeToWidth(),
            wrapClassName: this.props.wrapClassName + ' cl-modal'
        }
    }
    sizeToWidth = () => {
        let size = this.props.size || 'medium'
        switch(size) {
            case 'small':
                return 400
            case 'medium':
                return 700
            case 'large':
                return 920
        }
    }
    render () {
        let config = Object.assign({...this.props}, {...this.state})
        return (
            <Modal {...config}>
                {this.props.children}
            </Modal>
        )
    }
}

export default WrapperModal