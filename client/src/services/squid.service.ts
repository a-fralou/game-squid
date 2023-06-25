import { AxiosResponse } from 'axios'
import { API } from './index.service'
import { ITeam } from '../types'

export const getSession = async (): Promise<AxiosResponse<ITeam[]>> => {
  try {
    const res = await API.get('/session-teams').then((data) => data)

    return res
  } catch (error) {
    console.log(error)
    throw new Error('Failed to request!')
  }
}
