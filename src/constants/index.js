import Cookies from "js-cookie";
import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinksForUser = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/home",
    label: "Dashboard",
  },
 
  {
    name: "payment",
    imgUrl: payment,
    link: "/payment",

    label: "Payment",
  },

  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    label: "Profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    label: "Log-out",
    onclick: (navigate) => {
      Cookies.remove("token");
      console.log("logout");
      navigate("/");
    },
    isLogin: true,
  },
];

export const navLinksForAdmin=[
  {

    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
    label:" Create Campaign"
  },
  {

    name: "campaign",
    imgUrl: createCampaign,
    link: "/ongoing-campaign",
    label:"Ongoing Campaign"
  },
  {

    name: "campaign",
    imgUrl: createCampaign,
    link: "/completed-campaign",
    label:" Completed Campaign"
  },
]