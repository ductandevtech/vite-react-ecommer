// src/pages/LoginPage.tsx
import React from 'react';
import AuthForm from '~/components/AuthForm/AuthForm';
import FooterComponent from '~/components/Footer/FooterComponent';
import HeaderComponent from '~/components/Header/HeaderComponent';


const LoginPage = () => {
  const handleLogin = (values: any) => {
    console.log('Login:', values)
  }

  return <AuthForm isLogin={true} onSubmit={handleLogin} />
}

export default LoginPage;
