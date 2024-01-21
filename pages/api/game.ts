import { GameData, User } from '@/types'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
 
// get and store data
type Data = {
    [key: string]: GameData
}

const getItem = (id: string) => {
    // write to file system
    if (!existsSync(id+'.json')) {
        // create file
        writeFileSync(id+'.json', '{}', 'utf-8');
    }
    return readFileSync(id+'.json', 'utf-8');
}

const setItem = (id: string, data: string) => {
    writeFileSync(id+'.json', data, 'utf-8');
}

const storedata = (id: string, data: GameData) => {
    if (getItem(id) === null) {
        setItem(id, JSON.stringify({}));
    }
    
    setItem(id, JSON.stringify(data));
}

const getdata = (id: string) => {
    if (getItem(id) === null) {
        setItem(id, JSON.stringify({}));
    }
    const ldata = JSON.parse(getItem(id) || '{}');
    return ldata;
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData | { message: string }>
) {
  // get session id from url
    const sessionId = req.query.sessionId as string; 
    if (!sessionId) {
        res.status(400).json({ message: 'No session id provided' })
        return;
    }

    // get data from storage
    const data = getdata(sessionId);
    // get player id from url
    const userId = req.query.userId as string;
    if (!userId) {
        res.status(400).json({ message: 'No player id provided' })
        return;
    }

    // if post request add player to session
    if (req.method === 'POST') {
        console.log(req.body);
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

        // store data
        storedata(sessionId, data[sessionId]);

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

        // store data
        storedata(sessionId, data[sessionId]);
    }
    console.log(data[sessionId]);
    console.log(data)
    // store data
    storedata(sessionId, data[sessionId]);
    // respond with session data
    res.send(data[sessionId])
    return;

}