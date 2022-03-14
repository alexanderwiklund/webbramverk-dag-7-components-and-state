import { useState } from "react";
import "./App.css";
import Child from "./components/Child";
import Child2 from "./components/Child2";

function App() {
  const [parentValue, setParentValue] = useState(0);
  const [sharedValue, setSharedValue] = useState("");
  return (
    <div className="App">
      <button onClick={() => setSharedValue("Delat state!")}>PARENT</button>
      <p>{parentValue}</p>
      <Child
        fromParent={"Hej!"}
        changeParentState={setParentValue}
        sharedState={sharedValue}
      ></Child>
      <Child2 sharedState={sharedValue}></Child2>
    </div>
  );
}

export default App;
