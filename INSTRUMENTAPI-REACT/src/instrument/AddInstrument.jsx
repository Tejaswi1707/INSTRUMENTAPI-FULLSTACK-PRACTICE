import { useState } from "react";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './instrument.css'

export default function AddInstrument({ fetchInstruments }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    brand: "",
    price: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.url}/instrument/add`, formData);
      toast.success(res.data);
      setFormData({ id: "", name: "", type: "", brand: "", price: "" });
      fetchInstruments && fetchInstruments();
    } catch (err) {
      toast.error(err.response?.data || err.message || "Failed to add instrument");
    }
  };

  return (
    <div className="add-instrument-form">
      <h3>Add Instrument</h3>
      <ToastContainer position="top-center" autoClose={4000} />
      <form onSubmit={handleSubmit}>
        <input type="number" id="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
        <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" id="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
        <input type="text" id="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
        <input type="number" step="0.01" id="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <button type="submit">Add Instrument</button>
      </form>
    </div>
  );
}
