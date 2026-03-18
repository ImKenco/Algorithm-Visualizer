import {useState } from "react";

const ArrayBars = () => {

  
  const generateRandomValues = (length: number,  min: number,max: number) => {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    );
  };
  
  const [array, setArray] = useState<number[]>(generateRandomValues(20, 10, 100));

  const handleShuffle = () => {
    setArray(generateRandomValues(15, 5, 100));
  }

  const maxValue = Math.max(...array);

  return (
    <div className="border-10 rounded-lg">
      <div className="flex gap-1 items-end h-75 min-w-4xl mx-1 mt-8 ">
        {array.map((value, index) => (
          <div
            className="bg-bar flex-1 hover:cursor-pointer"
            key={index}
            style={{ height: `${(value / maxValue) * 100}%` }}
            onClick={handleShuffle}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ArrayBars;
