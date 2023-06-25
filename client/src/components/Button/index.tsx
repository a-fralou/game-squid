import styles from './index.module.scss'
import { IButton } from '../../types'

export const Button = ({ icon, onClick, children }: IButton) => (
  <button className={styles.btn} onClick={onClick}>
    {children && <div className={styles.text}>{children}</div>}
    <img src={icon} />
  </button>
)
