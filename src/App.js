import "./App.css";
import TravelPages from "./pages/TravelPages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListTravelPage from "./pages/ListTravelPage";
import UpdateListPage from "./pages/UpdateListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelPages />} />{" "}
        <Route path="/listtravel" element={<ListTravelPage />} />{" "}
        <Route path="/updatelist/:id" element={<UpdateListPage />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
