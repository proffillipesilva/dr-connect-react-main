import React from "react";
import "../css/home-doctor.css";

const HomeDoctor = () => {
  return (
    <div id="HomeDoctor">
      <div className="main">
        <h2 className="sub">Dashboard</h2>
        <div className="body-body">
          <div className="main-body">
            <div className="card-details">
              <div>
                <span className="number">7</span><br />
                <span class="material-icons md-24">book</span><span className="text-number">Agendamentos</span>
              </div>
              <div>
                <span className="number">7</span><br />
                <span class="material-icons md-24">face</span><span className="text-number">Pacientes</span>
              </div>
              <div>
                <span className="number">7</span><br />
                <span class="material-icons md-24">work</span><span className="text-number">Tratamentos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
        <h2 className="sub-sub">Next Appointments</h2>
          <div >
            
            
            <table className="table-appointment">
                  <thead>
                    <th>Date</th>
                    <th>Patient</th>
                    <th>Desc</th>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctor;
