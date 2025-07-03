// src/pages/RegisterPage.tsx
import React from 'react';
import RegisterForm from '~/components/RegisterForm/RegisterComponent';
import FooterComponent from '~/components/Footer/FooterComponent';
import HeaderComponent from '~/components/Header/HeaderComponent';

const RegisterPage = () => {
  const handleRegister = (values: any) => {
    console.log('Register:', values)
  }

  return (
    <>
      <HeaderComponent />
      <RegisterForm />
      <FooterComponent />
    </>
  )
}

export default RegisterPage;
