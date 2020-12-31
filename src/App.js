import React, { useState, lazy, Suspense } from "react";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
// import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          {/* <Suspense fallback={<h1>loading route...</h1>}> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
