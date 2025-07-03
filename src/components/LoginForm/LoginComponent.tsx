import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import styles from './Login.module.scss';
import LoginRegisterButton from '../LoginRegisterButton/LoginRegisterButtonComponent';

function LoginComponent() {
  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    console.log('Login:', values);
  };

  const handleRegister = () => {
    navigate('/customer/register');
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Vui lòng nhập email/SĐT'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  return (
    <Row gutter={16} className={styles['auth-container']}>
      <Col span={12} md={9}>
        <div className={`${styles['auth-box']} ${styles['login-box']}`}>
            <div className={styles['auth-header-title']}>
              <h3 className={styles['auth-title']}>Bạn đã có tài khoản IVY</h3>
              <p className={styles['auth-description']}>
                Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên
                và nhận được những ưu đãi tốt hơn!
              </p>
            </div>
          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className={styles['form-group']}>
                  <Field name="email" type="text" placeholder="Email/SĐT" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles['error']}
                  />
                </div>

                <div className={styles['form-group']}>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles['error']}
                  />
                </div>

                <div className={styles['form-options']}>
                  <div className={styles['remember-me']}>
                    <label>
                      <input
                        type="checkbox"
                        name="remember"
                        checked={values.remember}
                        onChange={handleChange}
                      />
                      Ghi nhớ đăng nhập
                    </label>
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                  <div className={styles['links-login-other']}>
                    <a href="#">Đăng nhập bằng mã QR</a>
                    <a href="#">Đăng nhập bằng OTP</a>
                  </div>
                </div>

                <LoginRegisterButton text='ĐĂNG NHẬP'/>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
      <Col span={12} md={9}>
        <div className={`${styles['auth-box']} ${styles['register-box']}`}>
          <div className={styles['auth-header-title']}>
              <h3 className={styles['auth-title']}>Khách hàng mới của IVY moda</h3>
              
          <p className={styles['auth-description']}>
            Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn
            này để truy cập biểu mẫu đăng ký.
          </p>
          <p className={styles['auth-description']}>
            Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá
            trình mua hàng trên ivymoda.com sẽ là một trải nghiệm thú vị và
            nhanh chóng hơn!
          </p>
        </div>
          <LoginRegisterButton text='ĐĂNG KÝ' onClick={handleRegister} />
        </div>
      </Col>
    </Row>
  );
}

export default LoginComponent;
