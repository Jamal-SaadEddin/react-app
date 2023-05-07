import Button from "./components/Button/Button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <Button color="primary" onClick={() => handleClick()}>
        My Button
      </Button>
    </div>
  );
}

export default App;
