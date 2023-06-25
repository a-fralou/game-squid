import cn from 'classnames'
import styles from './index.module.scss'
import { IBudge } from '../../types'

export const Budge = ({ children, isBig = false, status }: IBudge) => (
  <div
    className={cn(
      styles.budge,
      {
        [styles.budgeBig]: isBig
      },
      status ? styles.budgeLive : styles.budgeDied
    )}
  >
    {children}
  </div>
)
