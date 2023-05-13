import { useState } from "react";
import produce from "immer";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart(
      produce((cart) => {
        const item = cart.items.find((item) => item.id === 1);
        if (item) item.quantity++;
      })
    );
  };

  return (
    <div>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.title} - Quantity: {item.quantity}
        </p>
      ))}
      <button onClick={handleClick}>Change quantity</button>
    </div>
  );
}

export default App;
