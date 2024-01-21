'use client';
import PlayersList from "@/app/game-session/[sessionId]/[userid]/players-list";
import GamePage from "@/app/game-session/[sessionId]/[userid]/game-page";

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
