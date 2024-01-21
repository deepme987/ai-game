import { GameData, User } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}

const data: {
    [key: string]: GameData  
}
= {

}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // get session id from url
    const sessionId = req.query.sessionId as string; 
    if (!sessionId) {
        res.status(400).json({ message: 'No session id provided' })
        return;
    }
    // get player id from url
    const userId = req.query.userId as string;
    if (!userId) {
        res.status(400).json({ message: 'No player id provided' })
        return;
    }

    // if post request add player to session
    if (req.method === 'POST') {
        // get player name from body
        const playerName = req.body.playerName;

        // if session doesn't exist create it
        if (!data[sessionId]) {
            data[sessionId] = {
                started: false,
                gameData: {
                    currentPrompt: '',
                    currentOptions: [],
                    currentResponses: {},
                    users: {}
                }
            }
        }
        // add player to session
        data[sessionId].gameData.users[userId] = {
            id: userId,
            name: playerName
        }

        const response = req.body.response;

        data[sessionId].gameData.currentResponses[userId] = response;

    }

    // if put request update session prompt and options
    if (req.method === 'PUT') {
        // get prompt from body
        const prompt = req.body.prompt;
        // get options from body
        const options = req.body.options;
        // update session prompt and options
        data[sessionId].gameData.currentPrompt = prompt;
        data[sessionId].gameData.currentOptions = options;

        // clear responses
        data[sessionId].gameData.currentResponses = {};
    }

    return data[sessionId];

}