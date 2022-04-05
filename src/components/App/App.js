import "./App.css";
import SignUp from "../SignUp/SignUp";
import PageNotFound from "../PageNotFound/PageNotFound";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "../Home/Home";
import RedirectToHome from "../RedirectToHome/RedirectToHome";

function App() {
    return (
        <div className="App">
            <Router>
            <ToastContainer />
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<RedirectToHome />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
