import React from 'react'
import { Carousel, Col, Row } from 'antd'

import styles from './Slider.module.scss' 
import '~/styles/main.scss'

interface SliderComponentProps {
  images: string[];
  width?: string;
  height?: string;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ images, width='100%', height='100%' }) => (
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
        {images.map((image, index) => (
          <div className={styles['slider-image-wrapper']} key={index}>
            <a href="">
              <img className={styles['slider-image']} src={image} alt={`Slide ${index + 1}`} style={{ width, height }} />
            </a>
          </div>
        ))}
      </Carousel>
    </Col>
  </Row>
)
export default SliderComponent
