import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="animate-pulse">
        <p className="text-5xl">Loading</p>
      </div>
    </div>
  );
};

export default Loading;
