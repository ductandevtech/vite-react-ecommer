import React from "react";
import { Badge, Card, Row, Col } from "antd";
import styles from "./Card.module.scss";

interface Product {
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    title: "Linen Flare Skirt - Chân Váy Xòe",
    price: "1.490.000₫",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    isNew: true,
  },
  {
    title: "Vestline Charm – Áo Gile Cổ V",
    price: "1.190.000₫",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    isNew: false,
  },
  {
    title: "Wild IVY Dress – Đầm Xòe Họa Tiết",
    price: "2.490.000₫",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    isNew: false,
  },
  {
    title: "Luna IVY Dress – Đầm Kem Cổ Mix Khóa",
    price: "1.790.000₫",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    isNew: true,
  },
];

const CardComponent: React.FC = () => {
  return (
    <div className={styles["card-container"]}>
      <Row gutter={[16, 32]}>
        {products.map((item, index) => {
          const card = (
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} />}
              bodyStyle={{ padding: "12px" }}
            >
              <div className={styles["card-content"]}>
                <div className={styles["product-title"]}>{item.title}</div>
                <div className={styles["product-price"]}>{item.price}</div>
              </div>
            </Card>
          );

          return (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
              {item.isNew ? (
                <Badge.Ribbon text="NEW" color="orange">
                  {card}
                </Badge.Ribbon>
              ) : (
                card
              )}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardComponent;
