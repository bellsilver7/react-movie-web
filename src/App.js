import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("bg-stone-800");
    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.classList.remove("bg-stone-800");
    };
  }, []);
  return (
    <div className="container mx-auto">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
