import { Routes, Route } from "react-router-dom";

import Holders from "../components/Holders";
import FeedBackForm from "../components/FeedBackForm";
import Members from "../components/Members";
import Registration from "../components/Registration";
import Clubs from "../components/Clubs";
import Home from "../components/Home";
import Help from "../components/Help";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/attendence" element={<Members />} />
      <Route path="/careerchoice" element={<Holders />} />
      <Route path="/courses" element={<Holders />} />
      <Route path="/feedback" element={<FeedBackForm />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/Help" element={<Help />} />
    </Routes>
  );
};

export default AppRoutes;
