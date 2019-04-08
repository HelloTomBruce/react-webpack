import React from "react"
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom"

function PromptDemo() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={FourZoneFour} />
        <Prompt message={location => `are you sure to ${location.pathname}`} />
      </div>
    </Router>
  )
}

function Home() {
  return <div>Home</div>
}

function About() {
  return <div>About</div>
}

function FourZoneFour() {
  return <div>404</div>
}

export default PromptDemo
