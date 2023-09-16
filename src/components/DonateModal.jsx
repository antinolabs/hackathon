import { Button, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { CustomButton, FormField, Loader } from "../components";
import axios from "axios";
import { useCreateOrder } from "../apis/profileApi";
const DonateModal = ({ open, setOpen, name, id }) => {
  const [orderData, setUserData] = useState();
  const [amount, setAmount] = useState();
  const CreateOrder = useCreateOrder();
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(data) {
    console.log(data, "ddddd");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    console.log(data, "orderData");
    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: orderId } = data.data;

    const options = {
      key: "rzp_test_XU6XMAzK9VWubK", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),

      name: name,
      description: "Test Transaction",
      // image: { logo },
      order_id: orderId,
      handler: async function (response) {
        const data = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5000/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: name,
        email: "SoumyaDey@example.com",
        contact: "9109068753",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const handleFormFieldChange = (e) => {
    console.log("oooooooo", e.target.value);
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let formData = {
      organisationId: id,
      amount: parseInt(amount),
    };
    
    CreateOrder.mutate(formData, {
      onSuccess: (data) => {
        console.log(data.status, "success");
        message.success(data.data.status);
        setUserData(data.data.data);
        if(data.status == 200) {
          console.log(data, "dddt");
          displayRazorpay(data.data);
        }
   
      },
    });
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(!open)}
      title={`Donate for novel cause`}
      footer={null}
    >
      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Donating to"
            inputType="text"
            value={name}
            disabled={true}
          />
          <FormField
            labelName="Amount"
            placeholder="Enter Amount"
            inputType="number"
            className="no-spinners"
            value={amount}
            handleChange={handleFormFieldChange}
          />
        </div>
        <div className="flex gap-8">
          <Button
            // type="primary"
            className="mt-5  flex justify-end rounded-md"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            className="mt-5  flex justify-end rounded-md"
            onClick={handleSubmit}
          >
            Done
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default DonateModal;
