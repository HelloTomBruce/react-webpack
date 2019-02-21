import React from 'react'
import DialogPortal from './portals'
import Header from './header'
import Footer from './footer'
import '../../component-less/dialog.less'

class Dialog extends React.Component {
    constructor(props){
        super(props)
        const defaultConfig = {
            title: '提示',
            size: 'small',
            showClose: true,
            sure: true,
            cancel: true,
            sureText: '确定',
            cancelText: '取消',
            closeHandle: () => {
                console.log('close')
            },
            sureHandle: () => {
                console.log('sure')
            }
        }
        this.state = Object.assign(defaultConfig, this.props)
    }

    render () {
        let { showClose, title, sure, cancel, closeHandle, sureText, cancelText, sureHandle } = this.state
        let headerProps = {
            showClose,
            title,
            closeHandle
        }
        let footerProps = {
            sure,
            cancel,
            sureText,
            cancelText,
            closeHandle,
            sureHandle
        }
        return (
            <DialogPortal>
                <div className={'dialog-container ' + this.state.size}>
                    <Header {...headerProps}/>
                    <div className='dialog-body'>
                        {this.props.children}
                    </div>
                    <Footer {...footerProps}/>
                </div>
            </DialogPortal>
        )
    }
}

export default Dialog