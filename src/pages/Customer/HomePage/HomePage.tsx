
import {
  Breadcrumb,
  Layout,
  theme
} from 'antd'

import HeaderComponent from '~/components/Header/HeaderComponent'
import SliderComponent from '~/components/Slider/SliderComponent'
import FooterComponent from '~/components/Footer/FooterComponent'

const { Header, Content, Footer } = Layout
const HomePage: React.FC = () => {
   const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout>
      <HeaderComponent />
      <SliderComponent />
      <Content style={{ padding: '0 48px', backgroundColor: '#ffffff' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG
          }}
        >
          Content
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  )
}

export default HomePage