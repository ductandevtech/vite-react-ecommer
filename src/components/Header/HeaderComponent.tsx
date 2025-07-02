import React from 'react'
import { Breadcrumb, Dropdown, Layout, Menu, Space, Input, Col, Row } from 'antd'
import { DownOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faUser, faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { toUpperCaseAll } from '~/utils/toUpperCaseAll'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const { Header, Content, Footer } = Layout

const items = [
  {
    key: '1',
    label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">1st menu item</a>
  },
  {
    key: '2',
    label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">2nd menu item</a>
  },
  {
    key: '3',
    label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">3rd menu item</a>
  },
  {
    key: '4',
    label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">4th menu item</a>
  }
]

function HeaderComponent() {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/customer/login')
  }

  return (
    <Header className={styles.header}>
      <Row className={styles.header__row}>
        <Col span={12} className={styles['header__left-col']}>
          <Menu
            className={styles.header__menu}
            overflowedIndicator={null}
            items={[
              {
                key: 'dropdown',
                label: (
                  <Dropdown menu={{ items }} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>nữ</Space>
                    </a>
                  </Dropdown>
                )
              },
              {
                key: 'dropdown1',
                label: (
                  <Dropdown menu={{ items }} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>nam</Space>
                    </a>
                  </Dropdown>
                )
              },
              {
                key: 'dropdown2',
                label: (
                  <Dropdown menu={{ items }} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>đại tiệc mùa hè - sale tới 70%</Space>
                    </a>
                  </Dropdown>
                )
              },
              {
                key: 'dropdown3',
                label: (
                  <Dropdown menu={{ items }} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>bộ sưu tập</Space>
                    </a>
                  </Dropdown>
                )
              },
              {
                key: 'dropdown4',
                label: (
                  <Dropdown menu={{ items }} trigger={['hover']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>về chúng tôi</Space>
                    </a>
                  </Dropdown>
                )
              }
            ]}
          />
          <div className={styles.header__logo}>
            <img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" alt="Logo" />
          </div>
        </Col>

        <Col span={12} className={styles['header__right-col']}>
          <Space className={styles['header__actions']}>
            <div className={styles['header__actions-search-wrapper']}>
              <FontAwesomeIcon icon={faSearch} className={styles['header__actions-search-icon']} />
              <input
                type="search"
                className={styles['header__actions-input']}
                placeholder="Tìm kiếm sản phẩm...."
              />
            </div>
            <div className={styles['header__actions-list']}>
              <FontAwesomeIcon icon={faHeadphones} className={styles['header__actions-icon']} />
              <FontAwesomeIcon icon={faUser} onClick={handleLoginClick} className={styles['header__actions-icon']} />
              <FontAwesomeIcon icon={faBagShopping} className={styles['header__actions-icon']} />
            </div>
          </Space>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent
