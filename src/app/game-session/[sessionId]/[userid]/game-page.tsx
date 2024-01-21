import React from 'react';


const GamePage: React.FC<{ data: any }> = ({ data }) => {
  const { currentPrompt, currentOptions } = data;

  const handleOptionClick = (option: string) => {
    // TODO: handle option click
    console.log(option);
  };

  if (!currentOptions) return 'Loading';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 p-6 text-white">
      <div className="mb-8 w-full max-w-2xl p-4 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">{currentPrompt}</h2>
      </div>

      <div className="space-y-4">
        {currentOptions.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="w-full max-w-xs p-3 bg-blue-500 rounded-lg shadow text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
