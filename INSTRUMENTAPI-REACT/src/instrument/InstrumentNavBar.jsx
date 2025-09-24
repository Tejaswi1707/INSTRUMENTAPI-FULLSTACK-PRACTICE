import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import AddInstrument from "./AddInstrument";
import ViewAllInstrument from "./ViewAllInstrument";
import EditInstrument from "./EditInstrument";
import { useState } from "react";

export default function InstrumentNavBar() {
  const [editInstrument, setEditInstrument] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (instrument) => {
    setEditInstrument(instrument);   // store selected instrument
    navigate("/editinstrument");     // navigate to edit page
  };

  const handleUpdate = () => {
    setEditInstrument(null);
    setRefresh(!refresh); // refresh list after update
    navigate("/viewallinstrument");
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addinstrument">Add Instrument</Link></li>
          <li><Link to="/viewallinstrument">View All</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addinstrument" element={<AddInstrument fetchInstruments={() => setRefresh(!refresh)} />} />
        <Route path="/viewallinstrument" element={<ViewAllInstrument onEdit={handleEdit} key={refresh} />} />
        <Route path="/editinstrument" element={<EditInstrument instrument={editInstrument} onUpdate={handleUpdate} />} />
      </Routes>
    </div>
  );
}
