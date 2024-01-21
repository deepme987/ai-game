'use client';
import PlayersList from "@/app/game-session/[sessionId]/players-list";
import GamePage from "@/app/game-session/[sessionId]/game-page";

export default function GameSessionPage() {  // Function to handle the removal of users. Placeholder for now.

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
