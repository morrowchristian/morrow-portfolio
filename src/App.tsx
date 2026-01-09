// src/App.tsx
import Main from "./Main";
import Home from "./Home";
import "./styles/components/Button.css";

const App: React.FC = () => {
  return (
    <Main>
      <Home />
    </Main>
  );
};

export default App;
