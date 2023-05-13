import { useState } from "react";
import produce from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame(
      produce((game) => {
        game.player.name = "Bob";
      })
    );
  };

  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;
