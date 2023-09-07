import "./style.scss";
import Tasks from "./components/tasks";
import Create from "./components/create";
import { FetchProvider } from "./contexts/FetchContext";

function App() {
  return (
    <div className="App">
      <FetchProvider>
        <Tasks />
        <Create />
      </FetchProvider>
    </div>
  );
}

export default App;
