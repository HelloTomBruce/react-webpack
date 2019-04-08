import React from "react"
import "@/component-less/svgIcon.less"
const SvgIcon = props => {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#${props.iconClass}`} />
    </svg>
  )
}

export default SvgIcon
