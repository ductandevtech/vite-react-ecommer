import React from 'react'
import styles from './MainButton.module.scss'

interface MainButtonProps {
  text?: string
  onClick?: () => void
}
const MainButton: React.FC<MainButtonProps> = ({ text = '', onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default MainButtonProps
