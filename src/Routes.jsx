import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import Payment from "./pages/Payment";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element ={<Payment/>}/>
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/ongoing-campaign" element={<OngoingCampaing />} />
          <Route path="/completed-campaign" element={<CompletedCampaign/>}/>
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </>
  )
);
