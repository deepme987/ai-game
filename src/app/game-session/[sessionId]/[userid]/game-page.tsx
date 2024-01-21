import React from 'react';

const GamePage: React.FC<{ data: any }> = ({ data }) => {
  const { currentPrompt, currentOptions } = data;

  const handleOptionClick = (option: string) => {
    console.log(option);
    // TODO: Implement the option click logic
  };

  if (!currentOptions) return 'Loading...';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-start p-6 text-foreground animate-fadeIn">
      <div className="mb-8 w-full max-w-2xl p-4 bg-background-end rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold">{currentPrompt}</h2>
      </div>

      <div className="space-y-4">
        {currentOptions.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="w-full max-w-xs p-3 bg-blue-500 hover:bg-blue-700 rounded-lg shadow text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-ring-color focus:ring-opacity-50"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
