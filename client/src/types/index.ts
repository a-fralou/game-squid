import React from 'react'

export type PlayerType = {
  _id: string
  name: string
  photo: string
  isFriend: boolean
}

export interface IPlayer {
  playerID: string
  isLive: boolean
  score: number
  kills: number
  deaths: number
  player: PlayerType
}

export interface ITeam {
  team: string
  isWin: boolean
  players: IPlayer[]
}

export interface IButton {
  icon?: string
  children?: React.ReactNode
  onClick?: () => void
}

export interface IBudge {
  children: React.ReactNode
  status?: boolean
  isBig?: boolean
}

export interface IModal {
  playerData: IPlayer | null
  handleCloseModal: () => void
}
