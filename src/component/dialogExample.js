import React from 'react'
import Dialog from './dialog/index'
import { Button } from 'antd'

class DialogExample extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isShow: false,
            title: '提示',
            showClose: true,
            sureText: '确定',
            cancelText: '取消',
            closeHandle: this.closeHandle,
            sureHandle: this.sureHandle
        }
    }

    closeHandle = () => {
        this.setState({
            isShow: false
        })
    }

    sureHandle = () => {
        this.setState({
            isShow: false
        })
    }

    showDialog = () => {
        this.setState({
            isShow: true
        })
    }

    render () {
        return (
            this.state.isShow ?
            <Dialog {...this.state}>
                <div className='dialog-body'>
                    dialog body
                </div>
            </Dialog>
            : <Button onClick={this.showDialog}>show dialog</Button>        
        )
    }
}

export default DialogExample