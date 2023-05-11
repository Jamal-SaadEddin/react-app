import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: "notFixed" },
    { id: 2, title: "Bug 2", fixed: "notFixed" },
  ]);

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: "Fixed" } : bug))
    );
  };

  return (
    <div>
      {bugs[0].fixed}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
