import React from 'react'
import PrivateRoute from './private'

// 路由拦截
const WrapperRoute = ({auth, children}) => {
  // 需要授权
  if (auth) {
    return <PrivateRoute>{children}</PrivateRoute>
  }
  return <>{children}</>
}

export default WrapperRoute
