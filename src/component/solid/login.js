import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/action/solid'

const mapStateToProps = state => ({
    isLogin: state.solid.isLogin,
    webId: state.solid.webId
})

const mapActionToProps = dispatch => {
    return {
        login: (res) => {dispatch(login(res))},
        logout: () => {dispatch(logout())}
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        solid.auth.trackSession(session => {
            let res = {
                isLogin: !!session,
                webId: session && session.webId
            }
            this.props.login(res)
            this.getUserInfo()
        })
    }
    getUserInfo = async () => {
        const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/')
        const user = $rdf.sym(this.props.webId)
        const store = $rdf.graph()
        const fetcher = new $rdf.Fetcher(store)
        await fetcher.load(this.props.webId)
        const fullName = store.any(user, FOAF('name'))
        console.log(fullName)
        const friends = store.each(user, FOAF('knows'))
        console.log(friends)
    }
    login = () => {
        solid.auth.popupLogin({ popupUri: 'https://solid.github.io/solid-auth-client/dist/popup.html' })
    }
    logout = () => {
        solid.auth.logout()
        this.props.logout()
    }
    render () {
        return (
            <div>
                {
                    this.props.isLogin ? <Button onClick={this.logout}>Logout</Button> : <Button onClick={this.login}>Login</Button>
                }
                webId: {this.props.webId}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Login)