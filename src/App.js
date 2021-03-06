import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./components/app/Home";
import NavBar from "./components/app/NavBar";
import AllUsers from "./components/client/AllClients";
import AddClient from "./components/client/AddClient";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/all" exact element={<AllUsers/>} />
        <Route path="/add" exact element={<AddClient/>} />
        <Route path="/edit/:id" exact element={<AddClient/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
