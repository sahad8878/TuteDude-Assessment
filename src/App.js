import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ReferAndEarn from "./Pages/ReferAndEarn";
import FriendsReferred from "./Pages/FriendsReferred";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReferAndEarn />} />
        <Route path="/friends-referred" element={<FriendsReferred />} />
      </Routes>
    </Router>
  );
}

export default App;
