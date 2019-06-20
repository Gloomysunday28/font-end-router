import React from 'react'
import HashRouter from './routers/HashRouter'
import Link from './routers/Link'
import Route from './routers/Route'
import App from './App'

class Routers extends React.Component {
  render() {
    return <HashRouter>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Route path="/home" component={App} />
      <Route path="/about" component={() => <h2>About</h2>} />
    </HashRouter>
  }
}

export default Routers
