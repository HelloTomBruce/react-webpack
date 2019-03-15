import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} {...props}>
            {this.props.children}
        </button>
    )
})

export default Fancy = () => {
    const ref = React.createRef()
    return (
        <FancyButton ref={ref}>click me</FancyButton>
    )
}
