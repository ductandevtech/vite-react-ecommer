import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Select, Input, Button, DatePicker } from 'antd'
import moment from 'moment'
import styles from './Register.module.scss'
import { useAddressForm } from '~/hooks/handleAddressForm'
import { createUser, User } from '~/services/userApi'

const { Option } = Select

interface Props {
  initialData?: User
  onSubmit?: (data: User) => void
}

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
})

const RegisterForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const {
    cities,
    districts,
    wards,
    handleCityChange,
    handleDistrictChange,
    setInitialAddress,
  } = useAddressForm()

  useEffect(() => {
    if (initialData) {
      setInitialAddress(initialData.city, initialData.district)
    }
  }, [initialData])

  return (
    <div className={styles['register-container']}>
      <h2 className={styles.title}>
        {initialData ? 'Chỉnh sửa người dùng' : 'Đăng ký'}
      </h2>

      <Formik
        enableReinitialize
        initialValues={{
          firstName: initialData?.firstName || '',
          lastName: initialData?.lastName || '',
          email: initialData?.email || '',
          phone: initialData?.phone || '',
          dob: initialData?.dob || '',
          gender: initialData?.gender || '',
          city: initialData?.city || '',
          district: initialData?.district || '',
          ward: initialData?.ward || '',
          address: initialData?.address || '',
          password: initialData?.password || '',
          confirmPassword: initialData?.password || '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const { confirmPassword, ...userData } = values;

            if (onSubmit) {
              
              await onSubmit(userData);
              alert(' Cập nhật thành công');
            } else {
              await createUser(userData);
              alert(' Đăng ký thành công');
              resetForm();
            }
          } catch (error) {
            console.error('Lỗi submit:', error);
            alert(' Gửi dữ liệu thất bại');
          }
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Row gutter={40}>
              <Col span={12}>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Họ*</label>
                    <Field name="lastName" as={Input} placeholder="Họ..." />
                    <ErrorMessage name="lastName" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Tên*</label>
                    <Field name="firstName" as={Input} placeholder="Tên..." />
                    <ErrorMessage name="firstName" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Email*</label>
                    <Field name="email" as={Input} placeholder="Email..." />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Điện thoại*</label>
                    <Field name="phone" as={Input} placeholder="Điện thoại..." />
                    <ErrorMessage name="phone" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={12}>
                    <label>Ngày sinh*</label>
                    <DatePicker
                      className={styles['select-field']}
                      style={{ width: '100%' }}
                      placeholder="Chọn ngày sinh"
                      format="DD/MM/YYYY"
                      value={values.dob ? moment(values.dob, 'DD/MM/YYYY') : undefined}
                      onChange={(date, dateString) => setFieldValue('dob', dateString)}
                      allowClear
                    />
                    <ErrorMessage name="dob" component="div" className={styles.error} />
                  </Col>
                  <Col span={12}>
                    <label>Giới tính*</label>
                    <Select
                      onChange={(value) => setFieldValue('gender', value)}
                      value={values.gender || undefined}
                      placeholder="Chọn giới tính"
                      className={styles['select-field']}
                    >
                      <Option value="male">Nam</Option>
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
                      value={values.city || undefined}
                      placeholder="Chọn Tỉnh/TP"
                      allowClear
                      className={styles['select-field']}
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
                      value={values.district || undefined}
                      placeholder="Chọn Quận/Huyện"
                      allowClear
                      className={styles['select-field']}
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
                      onChange={(value) => setFieldValue('ward', value)}
                      value={values.ward || undefined}
                      placeholder="Chọn Phường/Xã"
                      allowClear
                      className={styles['select-field']}
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
                    <Field name="password" type="password" as={Input.Password} placeholder="Mật khẩu..." />
                    <ErrorMessage name="password" component="div" className={styles.error} />
                  </Col>
                </Row>
                <Row gutter={[40, 16]}>
                  <Col span={24}>
                    <label>Nhập lại mật khẩu*</label>
                    <Field name="confirmPassword" type="password" as={Input.Password} placeholder="Nhập lại mật khẩu..." />
                    <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                  </Col>
                </Row>
                {!initialData && (
                  <>
                    <Row><label><input type="checkbox" /> Đồng ý với các điều khoản</label></Row>
                    <Row><label><input type="checkbox" /> Nhận bản tin khuyến mãi</label></Row>
                  </>
                )}
                <Row gutter={12}>
                  <Col span={24} className={styles.submitWrapper}>
                    <Button type="primary" htmlType="submit">
                      {initialData ? 'Cập nhật' : 'Đăng ký'}
                    </Button>
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
