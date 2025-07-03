import React, { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { DatePicker } from "antd"
import moment from "moment"
import { Row, Col, Button, Select, Input } from "antd"
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from '~/services/apiAddress'
import styles from './Register.module.scss'
import LoginRegisterButton from "../LoginRegisterButton/LoginRegisterButtonComponent"
import { useAddressForm } from '~/hooks/handleAddressForm';

const { Option } = Select

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Bắt buộc").max(15, "Tối đa 15 ký tự"),
  lastName: Yup.string().required("Bắt buộc").max(15, "Tối đa 15 ký tự"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  phone: Yup.string().required("Bắt buộc"),
  gender: Yup.string().required("Bắt buộc"),
  dob: Yup.string().required("Bắt buộc"),
  city: Yup.string().required("Bắt buộc"),
  district: Yup.string().required("Bắt buộc"),
  ward: Yup.string().required("Bắt buộc"),
  address: Yup.string().required("Bắt buộc"),
  password: Yup.string().required("Bắt buộc"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
    .required("Bắt buộc"),
});

const RegisterForm: React.FC = () => {
  const {
    cities,
    districts,
    wards,
    handleCityChange,
    handleDistrictChange
  } = useAddressForm();

  return (
    <div className={styles["register-container"]}>
      <h2 className={styles.title}>Đăng ký</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          city: "",
          district: "",
          ward: "",
          address: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log("Submitted:", values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <Row gutter={40}>
              <Col span={12}>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Họ*</label>
                    <Field name="lastName" as={Input} placeholder='Họ...' />
                    <ErrorMessage name="lastName" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Tên*</label>
                    <Field name="firstName" as={Input} placeholder='Tên...' />
                    <ErrorMessage name="firstName" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Email*</label>
                    <Field name="email" as={Input} placeholder='Email...' />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Điện thoại*</label>
                    <Field name="phone" as={Input} placeholder='Điện thoại...' />
                    <ErrorMessage name="phone" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Ngày sinh*</label>
                    <DatePicker
                      className={styles["select-field"]}
                      style={{ width: '100%' }}
                      placeholder="Chọn ngày sinh"
                      format="DD/MM/YYYY"
                      onChange={(date, dateString) => {
                        setFieldValue("dob", dateString);
                      }}
                      allowClear
                    />
                    <ErrorMessage name="dob" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Giới tính*</label>
                    <Select
                      onChange={(value) => setFieldValue("gender", value)}
                      placeholder="Chọn giới tính"
                      className={styles["select-field"]}
                    >
                      <Option value="male" >Nam</Option>
                      <Option value="female">Nữ</Option>
                      <Option value="other">Khác</Option>
                    </Select>
                    <ErrorMessage name="gender" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Tỉnh/TP*</label>
                    <Select
                      onChange={(value) => handleCityChange(value, setFieldValue)}
                      placeholder="Chọn Tỉnh/TP"
                      allowClear
                      className={styles["select-field"]}
                    >
                      {cities.map((city) => (
                        <Option key={city.code} value={city.name}>
                          {city.name}
                        </Option>
                      ))}
                    </Select>
                    <ErrorMessage name="city" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Quận/Huyện*</label>
                    <Select
                      onChange={(value) => handleDistrictChange(value, setFieldValue)}
                      placeholder="Chọn Quận/Huyện"
                      allowClear
                      className={styles["select-field"]}
                    >
                      {districts.map((district) => (
                        <Option key={district.code} value={district.name}>
                          {district.name}
                        </Option>
                      ))}
                    </Select>
                    <ErrorMessage name="district" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={24}>
                    <label>Phường/Xã*</label>
                    <Select
                      onChange={(value) => setFieldValue("ward", value)}
                      placeholder="Chọn Phường/Xã"
                      allowClear
                      className={styles["select-field"]}
                    >
                      {wards.map((ward) => (
                        <Option key={ward.code} value={ward.name}>
                          {ward.name}
                        </Option>
                      ))}
                    </Select>
                    <ErrorMessage name="ward" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[12, 16]}>
                  <Col span={24}>
                    <label>Địa chỉ*</label>
                    <Field name="address" as={Input.TextArea} rows={2} />
                    <ErrorMessage name="address" component="div" className={styles.error} />
                  </Col>
                </Row>
              </Col>

              <Col span={12}>
                <Row gutter={40}>
                  <Col span={24}>
                    <label>Mật khẩu*</label>
                    <Field name="password" type="password" as={Input.Password} placeholder='Mật khẩu...' />
                    <ErrorMessage name="password" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={24}>
                    <label>Nhập lại mật khẩu*</label>
                    <Field name="confirmPassword" type="password" as={Input.Password} placeholder='Nhập lại mật khẩu...' />
                    <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row>
                  <label><input type="checkbox" /> Đồng ý với các điều khoản của IVY</label>
                </Row>
                <Row>
                  <label><input type="checkbox" /> Đăng ký nhận bản tin</label>
                </Row>
                <Row gutter={12}>
                  <Col span={24} className={styles.submitWrapper}>
                    <LoginRegisterButton text='Đăng ký' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm