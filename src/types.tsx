export interface User {
  id: string;
  name: string;
}

export type GameData = {

  started: boolean
  gameData: {
      users: {
          [key: string]: User
      }
      currentPrompt: string
      currentOptions: string[]
      currentResponses: {
          [key: string]: string
      }
  }
} 