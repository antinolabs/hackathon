import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import { DisplayCampaigns } from "../components";

import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
import { useQueryClient } from "@tanstack/react-query"
import { useGetUserProfile, useUpdateUserProfile } from "../apis/profileApi";

const Profile = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { data: userData } = useGetUserProfile();
  const update = useUpdateUserProfile();

  console.log("oooooooooooooo", userData?.data?.data);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    state: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    if (userData) {
      setForm({
        name: userData?.data?.data?.name,
        state: userData?.data?.data?.state,
        mobile: userData?.data?.data?.mobile,
        address: userData?.data?.data?.address,
        city: userData?.data?.data?.city,
        pincode: userData?.data?.data?.pincode,
      });
    }
  }, [userData]);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    update.mutate(form, {
      onSuccess: (data) => {
        message.success(data.data.message);
        queryClient.invalidateQueries("user-details");
      },
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
            value={form.state}
            handleChange={(e) => handleFormFieldChange("state", e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="PinCode *"
            placeholder="Enter pinCode"
            inputType="text"
            value={form.pincode}
            handleChange={(e) => handleFormFieldChange("pincode", e)}
          />
          <FormField
            labelName="city *"
            placeholder="Enter city name"
            inputType="text"
            value={form.city}
            handleChange={(e) => handleFormFieldChange("city", e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Mobile *"
            placeholder="Enter mobile"
            inputType="number"
            disabled={true}
            value={form.mobile}
            handleChange={(e) => handleFormFieldChange("mobile", e)}
          />
          <FormField
            labelName="address *"
            placeholder="Enter address"
            inputType="text"
            value={form.address}
            handleChange={(e) => handleFormFieldChange("address", e)}
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
};

export default Profile;
