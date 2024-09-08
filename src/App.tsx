import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["London", "New York", "Bangalore", "Tokyo", "Berlin"];

  const [alertVisible, setAlertVisibility] = useState(false)

  const handleSelectItem = (item: string) => {
    console.log("Inside App", item);
  };

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="City Name"
        onSelectItem={handleSelectItem}
      />
      <br />
      <br />

      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> Random text </Alert>}


      <Button color="info" onClick={() => setAlertVisibility(true)}>
        Custom Button
      </Button>
    </div>
  );
}

export default App;
