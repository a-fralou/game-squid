import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import logoImg from '../../assets/logo.png'
import imgTeamOne from '../../assets/team-one.png'
import imgTeamTwo from '../../assets/team-two.png'
import styles from './index.module.scss'
import { SquidTable } from '../SquidTable'
import { LayoutLightOverlay } from '../LayoutLightOverlay'
import { getSession } from '../../services/squid.service'
import { Loading } from '../Loading'

export const GameScreen = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['session'],
    queryFn: getSession
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoGame}>
        <img src={logoImg} alt='' />
      </div>
      <div className={styles.screen}>
        <LayoutLightOverlay>
          <div className={cn(styles.imgTeam, styles.imgTeamLeft)}>
            <img src={imgTeamOne} alt='' />
          </div>
          <div className={cn(styles.imgTeam, styles.imgTeamRight)}>
            <img src={imgTeamTwo} alt='' />
          </div>
          <div className={styles.content}>
            {!data || isLoading ? (
              <Loading />
            ) : (
              <div className={styles.row}>
                <div className={styles.col}>
                  <SquidTable data={data.data[0]} />
                </div>
                <div className={styles.col}>
                  <SquidTable data={data.data[1]} />
                </div>
              </div>
            )}
          </div>
        </LayoutLightOverlay>
      </div>
    </div>
  )
}
