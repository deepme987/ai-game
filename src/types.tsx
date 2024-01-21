export interface User {
  id: string;
  name: string;
}

export type GameDataProps = {

  started: boolean
  gameData: GameData
}

export type GameData = {
  users: {
    [key: string]: User
  }
  currentPrompt: string
  currentOptions: string[]
  currentResponses: {
    [key: string]: string
  }
}