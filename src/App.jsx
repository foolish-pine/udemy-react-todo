import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      <h1 style={{ color: "red" }}>test</h1>
      <p>p</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
