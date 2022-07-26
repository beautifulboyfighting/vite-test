import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const logged = true
  return logged ? <div> {children}</div> : <Navigate to="/login" />
}

export default PrivateRoute
