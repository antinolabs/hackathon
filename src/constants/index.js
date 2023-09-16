import Cookies from "js-cookie";
import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
    label :"Dashboard"
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
    label:"Campaign"
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
   
    label:"Payment"
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",

    label:"Withdraw"
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    label:"Profile"
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/signin",
    label:"Log-out",
    onclick: (navigate) => {
      Cookies.remove("token");
      console.log("logout");
      navigate("/signin");
    },
  },
];
