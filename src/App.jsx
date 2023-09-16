import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import LoginForm from "./pages/login";
import SignupForm from "./pages/Signup";
import Cookies from "js-cookie";

const App = () => {
  const [login, setLogin] = useState(false);
  const token = Cookies.get("token")

  useEffect(()=>{
    if(token){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  },[])
  return (
    <>
      {!login ? (
        <>
          <Routes>
            <Route path="/" element={<LoginForm setLogin = {setLogin} />} />
            <Route path = "/signup" element={<SignupForm/>}/>
          </Routes>
        </>
      ) : (
        <div className="relative sm:-8 p-4 bg-[#333347] min-h-screen flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
            <Sidebar />
          </div>

          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route
                path="/campaign-details/:id"
                element={<CampaignDetails />}
              />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
