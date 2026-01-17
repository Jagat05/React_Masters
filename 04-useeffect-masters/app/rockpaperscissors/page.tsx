"use client";

import React, { useState, useEffect } from "react";

type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<Choice | "">("");
  const [comChoice, setComChoice] = useState<Choice | "">("");
  const [result, setResult] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!userChoice || !comChoice) return;

    if (userChoice === comChoice) {
      setResult("It's a Draw!");
    } else if (
      (userChoice === "rock" && comChoice === "scissors") ||
      (userChoice === "paper" && comChoice === "rock") ||
      (userChoice === "scissors" && comChoice === "paper")
    ) {
      setResult("Congratulations! You Win!");
    } else {
      setResult("Computer Wins!");
    }

    setIsPlaying(false);
  }, [userChoice, comChoice]);

  const playGame = (choice: Choice) => {
    setIsPlaying(true);
    setUserChoice(choice);
    setResult("Computer is choosing...");
    setComChoice("");

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComChoice(randomChoice);
    }, 300);
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center">
      <div className="bg-[#74D0DB] p-8 rounded-2xl flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Rock Paper Scissors</h1>

        <div className="flex gap-12">
          {/* USER */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold">You</p>

            <div className="w-32 h-32 bg-[#74D0DB] rounded-xl flex items-center justify-center">
              {userChoice ? (
                <img
                  src={`/${userChoice}.png`}
                  alt={userChoice}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500 text-2xl">?</span>
              )}
            </div>

            <p className="capitalize">{userChoice}</p>
          </div>

          {/* COMPUTER */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold">Computer</p>

            <div className="w-32 h-32 bg-[#74D0DB] rounded-xl flex items-center justify-center">
              {comChoice ? (
                <img
                  src={`/${comChoice}.png`}
                  alt={comChoice}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500 text-2xl">?</span>
              )}
            </div>

            <p className="capitalize">{comChoice}</p>
          </div>
        </div>

        <div className="flex gap-4">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => playGame(choice)}
              disabled={isPlaying}
              className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 capitalize disabled:opacity-50"
            >
              {choice}
            </button>
          ))}
        </div>

        {result && <p className="text-xl font-bold">{result}</p>}
      </div>
    </div>
  );
};

export default RockPaperScissors;
