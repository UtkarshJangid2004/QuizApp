import React, { useEffect, useState } from 'react';
import Header from './Header';

const Leaderboard = ({ playerName }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const sortedPlayers = storedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(sortedPlayers);
  }, []);

  return (
    <>
      <Header playerName={playerName} />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="leaderboard-container h-[80vh] w-[50%]">
          <h1 className="text-5xl mb-5">Leaderboard</h1>
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Rank</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={player.id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{player.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
