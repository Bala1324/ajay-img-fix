import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Properties from "./components/Properties";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RegisterProperty from "./components/RegisterProperty";
import Admin from "./components/AdminDashBoard";
// import Sandbox from "./components/Sandbox";
import UserList from "./components/UserList";
import PropertyList from "./components/PropertyList";
import AdminSideMenu from "./components/AdminSideMenu";
import AdminNew from "./components/Sandbox";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admindashboard" element={<Admin />} />
          <Route path="/adminsidemenu" element={<AdminSideMenu />} />
          <Route path="/adminnew" element={<AdminNew />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/propertylist" element={<PropertyList />} />
          {/* <Route path="/sandbox" element={<Sandbox />} /> */}

          <Route path="/registerproperty" element={<RegisterProperty />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
