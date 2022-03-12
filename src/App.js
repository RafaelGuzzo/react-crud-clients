import { BrowserRouter, Route , Routes} from "react-router-dom";
import AllUsers from "./components/client/AllClients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/all" exact element={<AllUsers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
