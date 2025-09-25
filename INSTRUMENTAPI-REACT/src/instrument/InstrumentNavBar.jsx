
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import AddInstrument from "./AddInstrument";
import ViewAllInstrument from "./ViewAllInstrument";
import EditInstrument from "./EditInstrument";
import { useState } from "react";

export default function InstrumentNavBar() {
  const base = "/reactinstrumentapi"; // base URL
  const [editInstrument, setEditInstrument] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (instrument) => {
    setEditInstrument(instrument);
    navigate(`${base}/editinstrument`);
  };

  const handleUpdate = () => {
    setEditInstrument(null);
    setRefresh(!refresh);
    navigate(`${base}/viewallinstrument`);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to={`${base}/`}>Home</Link></li>
          <li><Link to={`${base}/addinstrument`}>Add Instrument</Link></li>
          <li><Link to={`${base}/viewallinstrument`}>View All</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${base}/`} element={<Home />} />
        <Route
          path={`${base}/addinstrument`}
          element={<AddInstrument fetchInstruments={() => setRefresh(!refresh)} />}
        />
        <Route
          path={`${base}/viewallinstrument`}
          element={<ViewAllInstrument onEdit={handleEdit} key={refresh} />}
        />
        <Route
          path={`${base}/editinstrument`}
          element={<EditInstrument instrument={editInstrument} onUpdate={handleUpdate} />}
        />
      </Routes>
    </div>
  );
}
