import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./components/app/Home";
import NavBar from "./components/app/NavBar";
import AllUsers from "./components/client/AllClients";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/all" exact element={<AllUsers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
