import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: true
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true}
    }
    componentDidCatch (err, info) {
        console.log(err, info)
    }
    render () {
        if (this.state.hasError) {
            return <h1>has error</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary