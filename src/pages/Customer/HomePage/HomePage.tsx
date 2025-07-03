
import {
  Breadcrumb,
  Col,
  Layout,
  Row,
  theme
} from 'antd'

import HeaderComponent from '~/components/Header/HeaderComponent'
import SliderComponent from '~/components/Slider/SliderComponent'
import FooterComponent from '~/components/Footer/FooterComponent'
import CardComponent from '~/components/Card/CardComponent'

const { Header, Content, Footer } = Layout
const HomePage: React.FC = () => {
   const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const imagesHeader = [
    "https://cotton4u.vn/files/news/2025/06/03/1709a21e8e1c7b0f2fdc03f43c3471b0.webp",
    "https://cotton4u.vn/files/news/2025/06/25/fe731be98a6cffcf815840d34f760324.webp"
  ]
  const imagesFooter = [
    "https://cotton4u.vn/files/news/2025/04/23/0cd827900f8d75840487982c44506798.webp"
  ]

  return (
    <Layout>
      <HeaderComponent />
      <SliderComponent images={imagesHeader} />
      <Content style={{ padding: '0 95px', backgroundColor: '#ffffff' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        
      </Content>
      <CardComponent />
      <SliderComponent images={imagesFooter} />
      <FooterComponent />
    </Layout>
  )
}

export default HomePage