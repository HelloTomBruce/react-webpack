import React from 'react'
import WrapperModal from './modalWrapper'
import { Button } from 'antd'
import '../component-less/antDialog.less'

class AntdModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOne: {
                afterClose: this.afterClose,
                cancelText: '取消',
                centered: true,
                closable: true,
                confirmLoading: true,
                destryOnClose: true,
                forceRender: true,
                keyboard: true,
                mask: true,
                footer: <Button onClick={this.onOk} type='primary'>确定（2）</Button>,
                maskClosable: false,
                maskStyle: {},
                okText: '确定',
                okType: 'primary',
                okButtonProps: {},
                cancelButtonProps: {},
                style: {},
                title: '提示',
                visible: false,
                size: 'medium',
                wrapClassName: 'antd',
                zIndex: 1000,
                onCancel: this.onCancel,
                onOk: this.onOk
            },
            modalTwo: {
                afterClose: this.afterClose2,
                cancelText: '取消',
                centered: true,
                closable: true,
                confirmLoading: true,
                destryOnClose: true,
                forceRender: true,
                keyboard: true,
                mask: false,
                footer: <Button onClick={this.onOk2} type='primary'>确定（2）</Button>,
                maskClosable: false,
                maskStyle: {},
                okText: '确定',
                okType: 'primary',
                okButtonProps: {},
                cancelButtonProps: {},
                style: {},
                title: '提示',
                visible: false,
                size: 'small',
                wrapClassName: '',
                zIndex: 1000,
                onCancel: this.onCancel2,
                onOk: this.onOk2
            }
            
        }
    }
    onCancel = () => {
        this.setState((prevState) => {
            let modalOne = prevState.modalOne
            modalOne.visible = false
            return {
                modalOne
            }
        })
    }
    onOk = () => {
        this.setState((prevState) => {
            let modalOne = prevState.modalOne
            modalOne.visible = false
            return {
                modalOne
            }
        })
    }
    afterClose = () => {
        console.log('after close')
    }
    onCancel2 = () => {
        this.setState((prevState) => {
            let modalTwo = prevState.modalTwo
            modalTwo.visible = false
            return {
                modalTwo
            }
        })
    }
    onOk2 = () => {
        this.setState((prevState) => {
            let modalTwo = prevState.modalTwo
            modalTwo.visible = false
            return {
                modalTwo
            }
        })
    }
    afterClose2 = () => {
        console.log('after close')
    }
    openDialogOne = () => {
        this.setState((prevState) => {
            let modalOne = prevState.modalOne
            modalOne.visible = true
            return {
                modalOne
            }
        })
    }
    openDialogTwo = () => {
        this.setState((prevState) => {
            let modalTwo = prevState.modalTwo
            modalTwo.visible = true
            return {
                modalTwo
            }
        })
    }
    render () {
        return (
            <div>
                <Button onClick={this.openDialogOne}>open</Button>
                <WrapperModal {...this.state.modalOne}>
                    <div className='dialog-body'>
                        body
                        <Button onClick={this.openDialogTwo}>open</Button>
                    </div>
                    <div className={this.state.modalTwo.visible ? 'dialog-body-mask' : ''}></div>
                </WrapperModal>
                <WrapperModal {...this.state.modalTwo}>
                    <div className="dialog-body">
                        body 2
                    </div>
                </WrapperModal>
            </div>
        )
    }
}

export default AntdModal