import React from "react";
import logo from "./logo.svg";
import "./App.css";
import qoreContext from "./qoreContext";

function App() {
  const allMember = qoreContext.view("allMember").useListRow();
  const firstMember = React.useMemo(() => allMember.data[0], [allMember.data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {firstMember?.email || "..."}
          <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
