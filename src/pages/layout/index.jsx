import React, {useState} from 'react'
import {LikeOutlined, UserOutlined} from '@ant-design/icons'
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components'
import {Avatar, Button, Descriptions, Result, Space, Statistic} from 'antd'
import {Outlet} from 'react-router-dom'
import defaultProps from './_defaultProps'

import './index.less'
const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
)

export default function LayoutPage() {
  const [settings, setSetting] = useState({fixSiderbar: true})
  const [pathname, setPathname] = useState('/')
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}>
      <ProLayout
        {...defaultProps}
        title={''}
        logo={() => ''}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: '王静',
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome')
            }}>
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        // {...settings}
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        // settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting)
        }}
        disableUrlParams={false}
      />
    </div>
  )
}
