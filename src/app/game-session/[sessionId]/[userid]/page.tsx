'use client';
import PlayersList from "@/app/game-session/[sessionId]/[userid]/players-list";
import GamePage from "@/app/game-session/[sessionId]/[userid]/game-page";

export default function GameSessionPage() {  // Function to handle the removal of users. Placeholder for now.

  // TODO: replace this with actual data from the server
  const data = {
    started: false,
    gameData: {
      users: [],
    }
  }

  if (!data.started) {
    return <PlayersList users={data.gameData.users} />;
  }

  return <GamePage data={data.gameData} />
}


export async function loader({ params: { sessionId , userid } }: { params: { sessionId: number , userid: number } }) {
  // Fetch the session data using params.sessionId
  const users = await fetchUsersForSession(sessionId, userid) as Promise<GameData> 
  console.log(users);
  return { data: { sessionId: sessionId, users } };
}

// Mock function to simulate fetching users from a database or API
async function fetchUsersForSession(sessionId: number, userid: number) {
  const res = fetch("/api/game/&playerId=" + userid + "&sessionId=" + sessionId).then((res) => res.json());
  return res
}
