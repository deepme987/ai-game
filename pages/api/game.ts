import { GameData, User } from '@/types'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
 

const empty: string = JSON.stringify({
    started: false,
    gameData: {
        currentPrompt: '',
        currentOptions: [],
        currentResponses: {},
        users: {}
    }
});
// get and store data
type Data = {
    [key: string]: GameData
}

const getItem = (id: string) => {
    // write to file system
    if (!existsSync(id+'.json')) {
        // create file
        writeFileSync(id+'.json', empty, 'utf-8');
    }
    return readFileSync(id+'.json', 'utf-8');
}

const setItem = (id: string, data: string) => {
    writeFileSync(id+'.json', data??empty, 'utf-8');
}

const storedata = (id: string, data: GameData) => {
    setItem(id, JSON.stringify(data));
}

const getdata = (id: string) => {
    const ldata = JSON.parse(getItem(id) || empty);
    return ldata;
}
 
export default async function handler(
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
        
        // add player to session
        data.gameData.users[userId] = {
            id: userId,
            name: playerName
        }

        const response = req.body.response;

        data.gameData.currentResponses[userId] = response;

        // store data
        storedata(sessionId, data);

    }

    // if put request update session prompt and options
    if (req.method === 'PUT') {
        // get prompt from body
        const prompt = req.body.prompt;
        // get options from body
        const options = req.body.options;
        // update session prompt and options
        data.gameData.currentPrompt = prompt;
        data.gameData.currentOptions = options;

        // clear responses
        data.gameData.currentResponses = {};

        // store data
        storedata(sessionId, data);
    }
    console.log(data);
    console.log(data)
    // store data
    storedata(sessionId, data);
    // respond with session data
    res.end(JSON.stringify(data.gameData));
    return data;

}