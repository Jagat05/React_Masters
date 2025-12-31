"use client";

import React, { useState } from "react";

const Dice = () => {
  const [userRoll, setUserRoll] = useState(1);
  const [comRoll, setComRoll] = useState(1);
  const [result, setResult] = useState("");

  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    const user = Math.ceil(Math.random() * 6);
    setUserRoll(user);
    setResult("Computer is rolling... ");

    setTimeout(() => {
      const computer = Math.ceil(Math.random() * 6);
      setComRoll(computer);

      setResult(
        user > computer
          ? "Congratulations! You Win!"
          : user < computer
          ? " Computer Wins!"
          : " It's a Draw!"
      );

      setIsRolling(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold"> Dice Game</h1>

        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold">You</p>
            <img src={`Dice${userRoll}.png`} alt="User Dice" />
            <p>{userRoll}</p>
          </div>

          <div className="flex flex-col items-center gap-5">
            <p className="font-bold">Computer</p>
            <img src={`Dice${comRoll}.png`} alt="Computer Dice" />
            <p>{comRoll}</p>
          </div>
        </div>

        <button
          onClick={rollDice}
          disabled={isRolling}
          className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800"
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>

        {result && <p className="text-xl font-bold">{result}</p>}
      </div>
    </div>
  );
};

export default Dice;
