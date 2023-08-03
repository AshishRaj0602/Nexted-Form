import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [formData1, setFormData1] = useState({ name: "", email: "" });
  const [formData2, setFormData2] = useState({ address: "" });
  const [formData3, setFormData3] = useState({ phoneNumber: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      console.log("Final Data:", {
        ...formData1,
        ...formData2,
        ...formData3,
      });
      setData({
        ...formData1,
        ...formData2,
        ...formData3,
      });
    }
    setStep((step) => (step += 1));
  };

  const handleChangeForm1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeForm2 = (e) => {
    const { name, value } = e.target;
    setFormData2((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeForm3 = (e) => {
    const { name, value } = e.target;
    setFormData3((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleFormSubmit}>
          <h2>Form 1</h2>
          <input
            type="text"
            name="name"
            value={formData1.name}
            onChange={handleChangeForm1}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData1.email}
            onChange={handleChangeForm1}
            placeholder="Email"
          />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleFormSubmit}>
          <h2>Form 2</h2>
          <div>
            <p>Name: {formData1.name}</p>
            <p>Email: {formData1.email}</p>
          </div>
          <input
            name="address"
            type="text"
            value={formData2.address}
            onChange={handleChangeForm2}
            placeholder="Address"
          />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleFormSubmit}>
          <h2>Form 3</h2>
          <div>
            <p>Name: {formData1.name}</p>
            <p>Email: {formData1.email}</p>
            <p>Address: {formData2.address}</p>
          </div>
          <input
            type="text"
            name="phoneNumber"
            value={formData3.phoneNumber}
            onChange={handleChangeForm3}
            placeholder="Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {step === 4 && (
        <div>
          <p>Name: {data?.name}</p>
          <p>Email: {data?.email}</p>
          <p>Address: {data?.address}</p>
          <p>Phone: {data?.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default App;
