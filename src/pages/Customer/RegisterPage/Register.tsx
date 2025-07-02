// src/pages/RegisterPage.tsx
import React from 'react';
import AuthForm from '~/components/AuthForm/AuthForm';
import FooterComponent from '~/components/Footer/FooterComponent';
import HeaderComponent from '~/components/Header/HeaderComponent';

const RegisterPage = () => {
  const handleRegister = (values: any) => {
    console.log('Register:', values)
  }

  return <AuthForm isLogin={false} onSubmit={handleRegister} />
}

export default RegisterPage;
