import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import themeConfig from './theme'
const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <React.StrictMode>
      <ConfigProvider theme={themeConfig}>
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </ConfigProvider>
  </React.StrictMode>
)
