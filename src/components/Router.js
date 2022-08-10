import Login from "../routes/Login";
import SignupPage from "../routes/SignupPage";
import Discover from "../routes/Discover";
import Feed from "../routes/Feed";
import Profile from "../routes/Profile";
import Profile2 from "../routes/Profile2";
import Fillup from "../routes/Fillup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logout from "../routes/Logout";
const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
                    <Route path="/SignupPage" element={<SignupPage />}></Route>
                    <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
                    <Route path="/" element={<Navbar />}>
                        <Route path="/Feed" element={<Feed />}></Route>
                        <Route path="/Discover" element={<Discover />}></Route>
                        <Route path="/Profile" element={<Profile />}></Route>
                        <Route path="/Profile2" element={<Profile2 />}></Route>
                        <Route path="/Fillup" element={<Fillup />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;
