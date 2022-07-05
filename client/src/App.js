import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotels from "./Pages/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
