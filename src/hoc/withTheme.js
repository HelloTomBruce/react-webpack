import React from 'react'
import { ThemeContext } from '../component/context/context'

const WithTheme = (Component) => {
    return (props) => {
        class ThemedComponent extends React.Component {
            static contextType = ThemeContext.Consumer
            render () {
                return (
                    <div>
                        <h1>2222</h1>
                        <Component {...props} theme={this.context.theme}/>
                    </div>
                )
            }
        }
        return ThemedComponent
    }
}

export default WithTheme