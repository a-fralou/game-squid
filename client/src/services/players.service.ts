import { AxiosResponse } from 'axios'
import { API } from './index.service'
import { PlayerType } from '../types'

export const addFriend = async (
  id: string
): Promise<AxiosResponse<PlayerType>> => {
  try {
    const res = await API.patch(`/players/add-friend/${id}`).then(
      (data) => data
    )

    return res
  } catch (error) {
    console.log(error)
    throw new Error('Failed to request!')
  }
}
