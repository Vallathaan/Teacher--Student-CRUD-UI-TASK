import React from "react";
import Footer from "./Footer";
import Nav from "./Navbar.js";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Student from "./Student";
import Mentor from "./Mentor";
import NewMentor from "./NewMentor.js";
import EditMentor from "./EditMentor";
import NewStudent from "./NewStudent";
import EditStudent from "./EditStudent";

const Content = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        
        <Nav />
        
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student" element={<Student />}>
              <Route path="newstudent" element={<NewStudent />} />
              <Route path=":id" element={<EditStudent />} />
            </Route>
            <Route path="/mentor" element={<Mentor />}>
              <Route path="newmentor" element={<NewMentor />} />
              <Route path=":id" element={<EditMentor />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;