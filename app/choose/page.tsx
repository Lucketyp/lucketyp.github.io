import React from "react";

// In this page you get to choose what to paint and then for how long

const Choose: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Chose what subject you want to paint</h1>
      <div className="mt-4 flex flex-row gap-4">
        <button className="px-5 py-2 bg-foreground text-white rounded hover:bg-darkforeground">
          Landscape
        </button>
        <button className="px-5 py-2 text-white bg-foreground rounded hover:bg-darkforeground">
          Portrait
        </button>
        <button className="px-5 py-2 text-white bg-foreground rounded hover:bg-darkforeground">
          Custom
        </button>
      </div>
    </div>
  );
};

export default Choose;