import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Profile from './pages/Profile';
function App() {
  return (
   <>
   {/* <Profile/> */}
   {/* <About/> */}
   {/* <Homepage/> */}
   {/* <Navbar/> */}
   {/* <Home/>  */}
   {/* <Login/> */}
   {/* <SignUp/> */}
   <BrowserRouter>
      <Routes>

          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
