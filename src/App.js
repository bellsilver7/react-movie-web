import { useState, useEffect } from "react";

function Hello() {
  const hiFn = () => {
    console.log("Hi :)");
    return byFn;
  };
  const byFn = () => console.log("By :(");
  useEffect(hiFn, []);

  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroy :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
