import React, {Component} from 'react'
import PropTypes from 'prop-types'

class HashRouter extends Component {
  state = {
    currentPath: window.location.hash.replace('#', '')
  }

  static childContextTypes = { // 用来检验getChildContext返回的值
    currentPath: PropTypes.string
  }

  getChildContext() {
    return {currentPath: this.state.currentPath}
  }

  onHashChange = e => {
    const currentPath = window.location.hash.replace('#', '');
    this.setState({ currentPath });
  };

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange);
  }

  render() {
    return <div value={{currentPath: this.state.currentPath}}>
      {this.props.children}
    </div>
  }
}

export default HashRouter
