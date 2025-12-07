import React from "react";

function App({ children }) {
  return (
    <div className="App">
      {children} {/* optional layout wrapper */}
    </div>
  );
}

export default App;
