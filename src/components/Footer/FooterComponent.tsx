// FooterComponent.tsx
import React from 'react'
import { Layout, Row, Col, Typography, Input, Space } from 'antd'
import {
  FacebookFilled,
  GoogleCircleFilled,
  InstagramFilled,
  YoutubeFilled
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faZ } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'
import MainButtonProps from '../LoginRegisterButton/LoginRegisterButtonComponent'
const { Footer } = Layout
const { Title, Link } = Typography

const FooterComponent: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <Row gutter={[32, 32]} justify="space-between">
        <Col xs={24} md={6} className={styles.footerColumn}>
          <img
            src="https://pubcdn.ivymoda.com/ivy2/images/logo.png"
            alt="Logo"
            className={styles.logo}
          />

          <Space size="middle">
            <FacebookFilled className={styles.icon} />
            <GoogleCircleFilled className={styles.icon} />
            <InstagramFilled className={styles.icon} />
            <FontAwesomeIcon icon={faZ} className={styles.icon} />
            <YoutubeFilled className={styles.icon} />
          </Space>

          <div className={styles.hotline}>HOTLINE: 0246 662 3434</div>
        </Col>

        <Col xs={24} sm={12} md={4} className={styles.footerColumn}>
          <Title level={5}>Giới thiệu</Title>
          <Space direction="vertical">
            <Link>Về IVY moda</Link>
            <Link>Tuyển dụng</Link>
            <Link>Hệ thống cửa hàng</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} className={styles.footerColumn}>
          <Title level={5}>Dịch vụ khách hàng</Title>
          <Space direction="vertical">
            <Link>Chính sách điều khoản</Link>
            <Link>Hướng dẫn mua hàng</Link>
            <Link>Chính sách thanh toán</Link>
            <Link>Chính sách đổi trả</Link>
            <Link>Chính sách bảo hành</Link>
            <Link>Chính sách giao nhận vận chuyển</Link>
            <Link>Chính sách thẻ thành viên</Link>
            <Link>Q&A</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={3} className={styles.footerColumn}>
          <Title level={5}>Liên hệ</Title>
          <Space direction="vertical">
            <Link>Hotline</Link>
            <Link>Email</Link>
            <Link>Live Chat</Link>
            <Link>Messenger</Link>
            <Link>Liên hệ</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={5} className={styles.footerColumn}>
          <Title level={5}>Nhận thông tin các chương trình của IVY moda</Title>
          <Input.Search
            placeholder="Nhập địa chỉ email"
            enterButton="Đăng ký"
            size="middle"
          />
          <div className={styles.downloadApp}>
            <Title level={5}>Download App</Title>
            <img
              src="https://pubcdn.ivymoda.com/ivy2/images/appstore.png"
              alt="App Store"
              className={styles.appImage}
            />
            <img
              src="https://pubcdn.ivymoda.com/ivy2/images/googleplay.png"
              alt="Google Play"
              className={styles.appImage}
            />
          </div>
        </Col>
      </Row>

      <div className={styles.copyright}>
        ©IVYmoda All rights reserved
      </div>
      
    </Footer>
  )
}

export default FooterComponent
