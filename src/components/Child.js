import React, { useState } from "react";

function Child({ fromParent, changeParentState, sharedState }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      Child {fromParent}
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button
        onClick={() => {
          changeParentState(inputValue);
        }}
      >
        FROM CHILD
      </button>
      <p>{sharedState}</p>
    </div>
  );
}

export default Child;
