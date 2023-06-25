import infoIcon from '../../assets/info-user.svg'
import styles from './index.module.scss'
import { Budge } from '../Budge'
import { Button } from '../Button'
import { useState } from 'react'
import { Modal } from '../Modal'
import { IPlayer, ITeam } from '../../types'

export const SquidTable = ({ data }: { data: ITeam }) => {
  const [playerData, setPlayerData] = useState<IPlayer | null>(null)
  const { team, isWin, players } = data

  const getTextForBudge = isWin ? 'Victory' : 'Losing'
  const getStatusPlayer = (status: boolean) => (status ? 'Live' : 'Dead')

  const handleOpenModal = (player: IPlayer) => {
    setPlayerData(player)
  }

  const handleCloseModal = () => {
    setPlayerData(null)
  }

  return (
    <>
      <div className={styles.hedCol}>
        <h2>Team {team}</h2>
        <Budge status={isWin} isBig>
          {getTextForBudge}
        </Budge>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Player</th>
            <th>Status</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {players.map((el) => (
            <tr key={el.playerID}>
              <td className={styles.userInfo}>
                <div className={styles.userPhoto}>
                  <img src={el.player.photo} />
                </div>
                <p>{el.player.name}</p>
              </td>
              <td>
                <Budge status={el.isLive}>{getStatusPlayer(el.isLive)}</Budge>
              </td>
              <td>
                <span className={styles.score}>{el.score}</span>
              </td>

              <td className={styles.actions}>
                <Button icon={infoIcon} onClick={() => handleOpenModal(el)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal playerData={playerData} handleCloseModal={handleCloseModal} />
    </>
  )
}
