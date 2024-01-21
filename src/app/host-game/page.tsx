'use client';
import Link from 'next/link';

export default function HostGame() {

  const hostAndStartGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionId = Math.floor(Math.random() * 1000000);
    document.cookie = `sessionId=${sessionId}`;
    window.location.href = `/game-session/${sessionId}`;
    console.log('Game hosted: ' + sessionId);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-transparent to-background-end p-6">
      <div className="w-full max-w-md rounded-lg bg-background-start p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground">Host a Game</h2>
        <p className="mt-2 text-foreground">Set up your game details and start playing.</p>

        <form className="mt-6" onSubmit={hostAndStartGame}>
          <div className="mb-4">
            <label htmlFor="gameName" className="block mb-2 text-sm font-medium text-foreground">
              Game Name
            </label>
            <input
              type="text"
              id="gameName"
              className="w-full rounded-md bg-background-start border-transparent p-2 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter game name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxPlayers" className="block mb-2 text-sm font-medium text-foreground">
              Max Players
            </label>
            <input
              type="number"
              id="maxPlayers"
              className="w-full rounded-md bg-background-start border-transparent p-2 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter max players"
            />
          </div>

          <div className="flex items-center justify-between space-x-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Host
            </button>

            <Link href="/">
              <p className="rounded-lg border border-transparent px-4 py-2 text-foreground hover:bg-background-start focus:outline-none focus:ring focus:ring-background-end focus:ring-opacity-50">
                Back
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
