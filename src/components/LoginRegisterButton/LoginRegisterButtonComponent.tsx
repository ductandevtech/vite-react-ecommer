import React from 'react'
import styles from './LoginRegisterButton.module.scss'

interface LoginRegisterButtonProps {
  text?: string
  onClick?: () => void
}
const LoginRegisterButton: React.FC<LoginRegisterButtonProps> = ({ text = '', onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default LoginRegisterButton
