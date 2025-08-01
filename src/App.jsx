import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import UserList from "./pages/Userlist";
import CurrentResult from "./pages/Currentresult";
import MarketList from "./pages/Marketlist";
import AddFinalAnk from "./pages/AddFinalAnk";
import AddFixAnk from "./pages/AddFixAnk";
import AajKaLuckyChance from "./pages/AajKaLuckyChance";
import WeeklyDataForm from "./pages/Weeaklydataform";
import AddDailyCharts from "./pages/AddDailyCharts";
import ContactSettings from "./pages/Contactsettingpage";
import ChangePassword from "./pages/ChangePassword";
import Personalmarket from "./pages/Personalmarket";
import Home from "./components/Home"; // ✅ Add this line

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/result" element={<CurrentResult />} />
        <Route path="/markets" element={<MarketList />} />
        <Route path="/add-final-ank" element={<AddFinalAnk />} />
        <Route path="/add-fix-ank" element={<AddFixAnk />} />
        <Route path="/lucky-chance" element={<AajKaLuckyChance />} />
        <Route path="/weekly-panel" element={<WeeklyDataForm />} />
        <Route path="/daily-charts" element={<AddDailyCharts />} />
        <Route path="/contact-settings" element={<ContactSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/personal-market" element={<Personalmarket />} />
      </Routes>
    </Router>
  );
}

export default App;
