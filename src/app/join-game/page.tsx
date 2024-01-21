'use client';
import Link from 'next/link';

export default function JoinGame() {

  const movetopage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get sessionId from input
    const sessionId = (document.getElementById('gameCode') as HTMLInputElement).value;
    // go to game-session/[sessionId]
    // generate random number for now
    const userID = Math.floor(Math.random() * 1000000);
    window.location.href = `/game-session/${sessionId}/${userID}`;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-transparent to-background-end p-6">
      <div className="w-full max-w-md rounded-lg bg-background-start p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Join a Game</h2>
        <p className="mt-2 text-foreground">Enter the code to join an existing game.</p>

        <form className="mt-6" onSubmit={
          movetopage
        }>
          <div className="mb-4">
            <label htmlFor="gameCode" className="block mb-2 text-sm font-medium text-foreground">
              Game Code
            </label>
            <input
              type="text"
              id="gameCode"
              className="w-full rounded-md bg-background-start border-transparent p-2 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter code here"
            />
          </div>

          <div className="flex items-center justify-between space-x-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Join
            </button>

            <Link href="/">
              <p className="rounded-lg border border-transparent px-4 py-2 text-foreground hover:bg-background-start focus:outline-none focus:ring focus:ring-background-end focus:ring-opacity-50 bg-gray-200 hover:bg-gray-300 text-black">
                Back
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
