import React, {Component} from 'react'
import PropTypes from 'prop-types'

const HocRouter = (...props) => WrappedComponent => (
  class extends Component {
    static contextTypes = {
      currentPath: PropTypes.string
    }

    render() {
      const props = {currentPath: this.context.currentPath, ...this.props}
      return <WrappedComponent {...props} />
    }
  }
)

export default HocRouter
