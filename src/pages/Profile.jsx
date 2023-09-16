import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Form, Input, Row } from "antd";
import { DisplayCampaigns } from '../components';

import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
const Profile = () => {
 const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState(false);
 const { createCampaign } = useStateContext();
 const [form, setForm] = useState({
   name: "",
   title: "",
   description: "",
   target: "",
   deadline: "",
   image: "",
 });

 const handleFormFieldChange = (fieldName, e) => {
   setForm({ ...form, [fieldName]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   checkIfImage(form.image, async (exists) => {
     if (exists) {
       setIsLoading(true);
       await createCampaign({
         ...form,
         target: ethers.utils.parseUnits(form.target, 18),
       });
       setIsLoading(false);
       navigate("/");
     } else {
       alert("Provide valid image URL");
       setForm({ ...form, image: "" });
     }
   });
 };

 return (
   <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
     {isLoading && <Loader />}
     <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
       <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
         Profile Update
       </h1>
     </div>

     <form
       onSubmit={handleSubmit}
       className="w-full mt-[65px] flex flex-col gap-[30px]"
     >
       <div className="flex flex-wrap gap-[40px]">
         <FormField
           labelName="Your Name *"
           placeholder="John Doe"
           inputType="text"
           value={form.name}
           handleChange={(e) => handleFormFieldChange("name", e)}
         />
         <FormField
           labelName="state *"
           placeholder="Enter State name"
           inputType="text"
           value={form.title}
           handleChange={(e) => handleFormFieldChange("title", e)}
         />
       </div>

       <div className="flex flex-wrap gap-[40px]">
         <FormField
           labelName="PinCode *"
           placeholder="Enter pinCode"
           inputType="text"
           value={form.target}
           handleChange={(e) => handleFormFieldChange("target", e)}
         />
         <FormField
           labelName="city *"
           placeholder="Enter city name"
           inputType="text"
           value={form.title}
           handleChange={(e) => handleFormFieldChange("title", e)}
         />
       </div>

       <div className="flex flex-wrap gap-[40px]">
         <FormField
           labelName="address *"
           placeholder="Enter address"
           inputType="text"
           value={form.target}
           handleChange={(e) => handleFormFieldChange("target", e)}
         />
       
       </div>

       <div className="flex justify-center items-center mt-[40px]">
         <CustomButton
           btnType="submit"
           title="Submit "
           styles="bg-[#1dc071]"
         />
       </div>
     </form>
   </div>
 );
}

export default Profile