import {
  AntDesignOutlined,
  CrownOutlined,
  SmileOutlined,
  TabletOutlined,
} from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: 'dashboard',
        icon: <SmileOutlined />,
        component: '../dashboard',
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
}
