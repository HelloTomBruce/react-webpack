import React, { Component } from "react"
import { Link } from "react-router-dom"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {
          path:  "/",
          label: "Home"
        },
        {
          path:  "/about",
          label: "About"
        }
      ]
    }
  }

  render() {
    let navList = this.state.navList.map(nav => {
      return (
        <Link key={nav.path} to={nav.path}>
          {nav.label}
        </Link>
      )
    })
    return <div className="nav-container">{navList}</div>
  }
}

export default Nav
