'use client';
import PlayersList from "@/app/game-session/[sessionId]/players-list";
import GamePage from "@/app/game-session/[sessionId]/game-page";

// Sample data for the list of users. In a real app, this would come from state or props.
const dummy_users = [
  { id: 1, name: 'PlayerOne' },
  { id: 2, name: 'PlayerTwo' },
  { id: 3, name: 'PlayerThree' },
];

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


export async function loader({ params: { sessionId } } : { params: { sessionId: number } }) {
  // Fetch the session data using params.sessionId
  const users = await fetchUsersForSession(sessionId);
  return { data: { sessionId: sessionId, users } };
}

// Mock function to simulate fetching users from a database or API
async function fetchUsersForSession(sessionId: number) {
  console.log(`Fetching users for session: ${sessionId}`);
  // Replace with your actual fetch call
  return [
    { id: 1, name: 'PlayerOne' },
    { id: 2, name: 'PlayerTwo' },
    { id: 3, name: 'PlayerThree' },
    // ... more users
  ];
}