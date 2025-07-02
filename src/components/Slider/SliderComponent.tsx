import React from 'react'
import { Carousel, Col, Row } from 'antd'

import styles from './Slider.module.scss' 
import '~/styles/main.scss'

const SliderComponent = () => (
  <Row>
    <Col span={24}>
      <Carousel
        className={styles['slider-wrapper']}
        arrows
        autoplay
        autoplaySpeed={4000}
        dots
        dotPosition="bottom"
        draggable
        effect="scrollx"
        pauseOnHover >
        <div className={styles['slider-image-wrapper']}>
          <a href="">
            <img className={styles['slider-image']} src="https://cotton4u.vn/files/news/2025/06/03/1709a21e8e1c7b0f2fdc03f43c3471b0.webp" alt="Slide 1" />
          </a>
        </div>
        <div className={styles['slider-image-wrapper']}>
          <a href="">
            <img className={styles['slider-image']} src="https://cotton4u.vn/files/news/2025/06/25/fe731be98a6cffcf815840d34f760324.webp" alt="Slide 2" />
          </a>
        </div>
      </Carousel>
    </Col>
  </Row>
)
export default SliderComponent