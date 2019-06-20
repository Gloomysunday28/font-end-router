import React, {Fragment} from 'react'
import HocRouter from './connectRouter'

export default HocRouter()(({ currentPath, path, component }) => {
  return <Fragment>
    {currentPath === path && component && component()}
  </Fragment>
})