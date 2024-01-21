import {User} from "@/types";
import Link from "next/link";

// Players list function to render before game starts

const users = [
  { id: 1, name: 'PlayerOne' },
  { id: 2, name: 'PlayerTwo' },
  { id: 3, name: 'PlayerThree' },
];

type PlayersListProps = {
  users: User[] | null;
};
export default function PlayersList({ users }: { users: User[] ; }) {

  const removeUser = (userId: number) => {
    console.log(`Remove user with ID: ${userId}`);
    // Implement user removal logic here
  };

  const startGame = () => {
    console.log('Game started!');
    // Implement game start logic here
  };

  return (
  <>
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent to-background-end p-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Game Title</h1>

      <ul className="mb-4 w-full max-w-md">
        {users.map((user: User) => (
          <li key={user.id} className="flex items-center justify-between p-2 bg-background-start rounded-lg mb-2">
            <div className="flex items-center">
              {/* Placeholder for user avatar */}
              <div className="rounded-full bg-blue-500 w-8 h-8 mr-2"></div>
              <span className="text-foreground">{user.name}</span>
            </div>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex w-full max-w-md justify-between">
        <button
          className="rounded-lg bg-green-500 px-6 py-2 text-white hover:bg-green-600 focus:outline-none fofcus:ring focus:ring-green-300 focus:ring-opacity-50"
          onClick={startGame}
        >
          Start Game
        </button>

        <Link href="/">
          <p className="rounded-lg border border-transparent px-6 py-2 bg-gray-200 text-black text-foreground hover:bg-background-start focus:outline-none focus:ring focus:ring-background-end focus:ring-opacity-50 hover:bg-gray-300">
            Back
          </p>
        </Link>
      </div>
    </div>
  </>
  );
}