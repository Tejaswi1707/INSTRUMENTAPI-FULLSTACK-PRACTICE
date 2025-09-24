import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewAllInstrument({ onEdit }) {
  const [instruments, setInstruments] = useState([]);
  const [error, setError] = useState("");

  const fetchInstruments = async () => {
    try {
      const res = await axios.get(`${config.url}/instrument/viewall`);
      setInstruments(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchInstruments();
  }, []);

  const deleteInstrument = async (id) => {
    try {
      const res = await axios.delete(`${config.url}/instrument/delete/${id}`);
      toast.success(res.data);
      fetchInstruments();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h3>All Instruments</h3>
      <ToastContainer position="top-center" autoClose={4000} />
      {error && <p className="text-danger">{error}</p>}
      {instruments.length === 0 ? (
        <p>No Instruments Found</p>
      ) : (
       <table className="instrument-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
      <th>Brand</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {instruments.map(ins => (
      <tr key={ins.id}>
        <td data-label="ID">{ins.id}</td>
        <td data-label="Name">{ins.name}</td>
        <td data-label="Type">{ins.type}</td>
        <td data-label="Brand">{ins.brand}</td>
        <td data-label="Price">{ins.price}</td>
        <td data-label="Action">
          <button className="edit-button" onClick={() => onEdit(ins)}>Edit</button>
          <button className="delete-button" onClick={() => deleteInstrument(ins.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}
    </div>
  );
}
