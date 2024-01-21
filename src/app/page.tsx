import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-24">
      <div className="z-10 max-w-5xl w-full text-center font-mono text-sm lg:flex lg:justify-center">
        <code className="font-mono font-bold text-lg lg:text-xl">PlAI-Link</code>
      </div>

      {/* Main Content */}
      <div className="mt-10 flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Welcome to PlAI-Link</h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">Your AI-Driven Party Game Hub</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/join-game">
            <p className="block rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Join a Game
            </p>
          </Link>
          <Link href="/host-game">
            <p className="block rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Host a Game
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
