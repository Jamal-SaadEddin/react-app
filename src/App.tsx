import { useState } from "react";
import produce from "immer";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <div>
      <p>{pizza.toppings.join(", ")}</p>
      <button onClick={handleClick}>Add topping</button>
    </div>
  );
}

export default App;
