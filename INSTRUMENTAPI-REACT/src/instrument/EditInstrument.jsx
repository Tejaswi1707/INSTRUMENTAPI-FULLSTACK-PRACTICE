

import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./instrument.css";

export default function EditInstrument({ instrument, onUpdate }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    brand: "",
    price: "",
  });

  useEffect(() => {
    if (instrument) {
      setFormData({
        id: instrument.id || "",
        name: instrument.name || "",
        type: instrument.type || "",
        brand: instrument.brand || "",
        price: instrument.price || "",
      });
    }
  }, [instrument]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${config.url}/instrument/update/${formData.id}`,
        formData
      );
      toast.success(res.data || "Instrument updated successfully!");
      if (onUpdate) onUpdate();
    } catch (err) {
      toast.error(err.response?.data || err.message || "Update failed");
    }
  };

  if (!instrument) {
    return (
      <div className="add-instrument-form">
        <h3>Select an instrument to edit</h3>
      </div>
    );
  }

  return (
    <div className="add-instrument-form">
      <h3>Edit Instrument</h3>
      <ToastContainer position="top-center" autoClose={4000} />
      <form onSubmit={handleUpdate}>
        <input type="number" id="id" value={formData.id} disabled />
        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Instrument Name" required />
        <input type="text" id="type" value={formData.type} onChange={handleChange} placeholder="Instrument Type" required />
        <input type="text" id="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required />
        <input type="number" step="0.01" id="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit" className="update-btn">Update Instrument</button>
      </form>
    </div>
  );
}
