import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./Telas/Header";
import HomeMain from "./Telas/HomeMain";
import AboutUs from "./Telas/AboutUs";
import Login from "./Telas/Login";
import MakeAppointment from "./Telas/MakeAppointment";
import Filtro from "./Telas/Filtro";
import Agenda from "./Telas/Agenda";
import HomeDoctor from "./Telas/HomeDoctor";
import HomePatient from "./Telas/HomePatient";
import PatientProfile from "./Telas/PatientProfile";
import DoctorProfile from "./Telas/DoctorProfile";

const App = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const role = useSelector((state) => state.role);

  return (
    <>
      <Header role={role} loggedIn={loggedIn} />
      <Routes>
        {loggedIn ? (
          <>
            {role === "ROLE_PATIENT" ? (
              <>
                
                <Route
                  path="/agenda"
                  element={
                    <>
                      <MakeAppointment />
                    </>
                  }
                />
                <Route
                  path="/busca"
                  element={
                    <>
                      <Filtro />
                    </>
                  }
                />
                <Route
                  path="/edit-profile"
                  element={
                    <>
                      <PatientProfile />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <HomePatient />
                    </>
                  }
                />
              </>
            ) : (
              <>
                <Route
                  path="/agenda"
                  element={
                    <>
                      <Agenda />
                    </>
                  }
                />
                <Route
                  path="/edit-profile"
                  element={
                    <>
                      <DoctorProfile />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <HomeDoctor />
                    </>
                  }
                />
              </>
            )}
          </>
        ) : (
          <>
            <Route
              path="/nossos-servicos"
              element={
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
               path="*"
              element={
                <>
                  <Login />
                </>
              }
            />
            
          </>
        )}
      </Routes>
      <Outlet />
    </>
  );
};

export default App;
