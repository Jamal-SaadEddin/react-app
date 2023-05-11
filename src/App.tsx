import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add
    // setTags([...tags, "exciting"]);

    //Remove
    // setTags(tags.filter((tag) => tag !== "cheerful"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    // You can do one of them in this function
  };

  return (
    <div>
      {tags.join(" ")}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
