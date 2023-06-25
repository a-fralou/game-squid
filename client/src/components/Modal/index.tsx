import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LayoutLightOverlay } from '../LayoutLightOverlay'
import addIcon from '../../assets/add-friend.svg'
import styles from './index.module.scss'
import { Button } from '../Button'
import { Budge } from '../Budge'
import { IModal } from '../../types'
import { addFriend } from '../../services/players.service'

export const Modal = ({ playerData, handleCloseModal }: IModal) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: string) => addFriend(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['session'] })
      handleCloseModal()
    }
  })

  const handleAddFriend = (id: string) => {
    mutation.mutate(id)
  }

  if (playerData === null) {
    return null
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.backDrop} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <LayoutLightOverlay>
          <div className={styles.content}>
            <div className={styles.userPhoto}>
              <img src={playerData.player.photo} />
            </div>
            <p className={styles.userName}>{playerData.player.name}</p>
            <Budge status={true}>{`Kills: ${playerData.kills}`}</Budge>
            <Budge status={false}>{`Deaths: ${playerData.deaths}`}</Budge>
            {playerData.player.isFriend ? (
              <div className={styles.isFriend}>You have friend</div>
            ) : (
              <Button
                icon={addIcon}
                onClick={() => handleAddFriend(playerData.playerID)}
              >
                Your friend
              </Button>
            )}
          </div>
        </LayoutLightOverlay>
      </div>
    </div>
  )
}
