import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom"

let isLogin = false

class AuthExample extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Router>
                <div>
                    <AuthButton/>
                    <ul>
                        <li>
                            <Link to='/public'>Public</Link>
                        </li>
                        <li>
                            <Link to='/protected'>Protect</Link>
                        </li>
                    </ul>
                    <Route exact path='/' component={Public}/>
                    <Route path='/login' component={Login}/>
                    <PrivateRoute path='/protected' component={Protect}/>
                </div>
            </Router>
        )
    }
}

const AuthButton = withRouter(
    ({history}) => {
        return isLogin ? <div>
                <p>welcome</p>
                <button onClick={() => isLogin = false}>Logout</button>
            </div> :
            <p>you are not login in</p>
    }
)

function Public (props) {
    return (
        <div>
            public page
        </div>
    )
}

function Protect (props) {
    return (
        <div>
            protect page
        </div>
    )
}

function PrivateRoute ({component: Copmonent, ...rest}) {
    return (
        <Route {...rest} render={props => {
            return isLogin ? <Copmonent {...props}/> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        }}/>
    )
}
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: isLogin
        }
    }
    login = () => {
        isLogin = true
        this.setState({
            isLogin: isLogin
        })
    }
    logout = () => {
        isLogin = false
        this.setState({
            isLogin: isLogin
        })
    }
    render () {
        return (
            <div>
                {this.state.isLogin ? <button onClick={this.logout}>logout</button> : <button onClick={this.login}>login</button>}
            </div>
        )
    }
}

export default AuthExample