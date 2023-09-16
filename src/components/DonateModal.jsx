import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { CustomButton, FormField, Loader } from "../components";



const DonateModal = ({open,setOpen,name}) => {
    const [form, setForm] = useState({
        name: "",
       amount :""
      });
      const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value });
      };

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log("form", form);
        update.mutate(form, {
          onSuccess: (data) => {
            message.success(data.data.message)
            queryClient.invalidateQueries("user-details")
          },
        })
    }


    useEffect(() => {
        if (name) {
          setForm({
            name: name,
           
          });
        }
      }, []);

  return (
    <Modal 
    open = {open}
    onCancel ={()=>setOpen(!open)}
    title={`Donate for novel cause`}    

    >

<form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Donating to" 
            inputType="text"
            value={name}
            disabled={true}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Amount"
            placeholder="Enter Amount"
            inputType="text"
            value={form.amount}
            handleChange={(e) => handleFormFieldChange("amount", e)}
          />
        </div>

       

       
      </form>

    </Modal>
  )
}

export default DonateModal