import React, {lazy} from 'react'

import Login from '../pages/login'
import Layout from '../pages/layout'
import Dashboard from '../pages/dashboard'

import WrapperRoute from './config'

const Project = lazy(() => import('../pages/project'))
const NotFound = lazy(() => import('../pages/404'))

import {useRoutes} from 'react-router-dom'

const routeList = [
  {
    path: '/',
    element: (
      <WrapperRoute auth={true}>
        <Layout />
      </WrapperRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]

const RenderRouter = () => {
  const element = useRoutes(routeList)
  return element
}

export default RenderRouter
