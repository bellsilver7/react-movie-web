import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return <div>{loading ? "Loading..." : null}</div>;
}

export default App;
