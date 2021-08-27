import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import RootRouter from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RootRouter />
    </ThemeProvider>
  );
};

export default App;
