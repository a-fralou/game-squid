import React from 'react'
import styles from './index.module.scss'

export const LayoutLightOverlay = ({
  children
}: {
  children: React.ReactNode
}) => <div className={styles.overlay}>{children}</div>
