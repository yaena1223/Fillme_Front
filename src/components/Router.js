import Login from "../routes/Login";
import SignupPage from "../routes/SignupPage";
import SignupProfile from "../routes/SignupProfile";
import SignupPersona from "../routes/SignupPersona";
import UpdatePersona from "../routes/UpdatePersona";
import SettingProfile from "../routes/SettingProfile";
import Discover from "../routes/Discover";
import Feed from "../routes/Feed";
import Profile from "../routes/Profile";
import Profile2 from "../routes/My_persona_detail";
import Fillup from "../routes/Fillup";
import User_persona_detail from "../routes/User_persona_detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logout from "../routes/Logout";
import Detail from "../routes/Detail";
import LandingPage from "../routes/Landing_page";
import User_Profile from "../routes/User_Profile";
const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Feed /> : <LandingPage />}></Route>
                    <Route
                        path="/Login"
                        element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                    ></Route>

                    <Route
                        path="/SignupPage"
                        element={
                            <SignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }
                    ></Route>
                    <Route path="/SignupProfile" element={<SignupProfile />}></Route>
                    <Route
                        path="/SignupPersona"
                        element={
                            <SignupPersona isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }
                    ></Route>
                    <Route
                        path="/UpdatePersona"
                        element={
                            <UpdatePersona isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }
                    ></Route>
                    <Route
                        path="/SettingProfile"
                        element={
                            <SettingProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }
                    ></Route>
                    <Route
                        path="/logout"
                        element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                    ></Route>
                    <Route path="/Feed" element={<Feed />}></Route>
                    <Route path=":user_id" element={<User_Profile />}></Route>
                    <Route path="/Discover/:user_id" element={<User_Profile />}></Route>
                    <Route path="/" element={<Navbar />}>
                        <Route path="/Discover" element={<Discover />}></Route>
                        <Route path="/Detail" element={<Detail />}></Route>
                        {/* <Route path="/Detail/:name" element={<User_persona_detail />}></Route> */}
                        <Route
                            path="/Profile"
                            element={
                                <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                            }
                        ></Route>

                        <Route path="/Fillup" element={<Fillup />}></Route>
                        <Route path="Profile/user_profile/:Id" element={<Profile2 />} />
                        <Route path="/user_profile/:Id" element={<User_persona_detail />} />
                        <Route path="/new_feelings/:Id" element={<User_persona_detail />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;
