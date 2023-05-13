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
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
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
