import { useEffect } from "react";

function App() {
  const connect = () => {
    console.log("Connecting");
  };
  const disconnect = () => {
    console.log("Disconnecting");
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div></div>;
}

export default App;
