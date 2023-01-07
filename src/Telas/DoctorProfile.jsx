import React, { useState, useEffect } from "react";
import "../css/doctor-profile.css";
import axiosInstance from "../axios";
import logoCard from "../images/logo-card-login.svg";

const DoctorProfile = () => {
  const [form, setForm] = useState({
    name: "",
    crm: "",
    speciality: "",
    phoneNumber: "",
    zipCode: "",
    address: "",
    complement: "",
    healthInsurance: "",
  });
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/doctors`, form);

      const data = await res.data;
    } catch (ex) {
      console.log(ex);
    }
  };

  const loadUser = async () => {
    try {
      const res = await axiosInstance.get(`/doctors/me`);
      const doctor = await res.data;
      setForm({
        name: doctor.name,
        cep: doctor.cep,
        phoneNumber: doctor.phoneNumber,
        address: doctor.address,
        crm: doctor.crm,
        speciality: doctor.speciality,
        healthInsurance: doctor.healthInsurance,
        complement: doctor.complement,
      });
      // setUser(user);
    } catch (ex) {}
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div id="DoctorProfile">
      <div className="main-login">
        <div className="left-login">
          <h1>
            Cadastre-se e tenha
            <br />o melhor atendimento
          </h1>
        </div>
        <div className="right-login">
          <div className="card-login-medic">
            <div className="title-a">
              <a>Bem Vindo(a) ao</a>
              <br />
            </div>
            <div className="title">
              <img src={logoCard} className="title-image" />
              <br />
              <br />
              <br />
              <br />
            </div>
           
            <div className="textfield">
              <label for="name">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                onChange={updateForm}
                value={form.name}
              />
            </div>
            <div className="textfield">
              <label for="crm">CRM</label>
              <input
                id="crm"
                type="text"
                name="crm"
                placeholder="CRM"
                required
                onChange={updateForm}
                value={form.crm}
              />
            </div>
            <div className="textfield">
              <label for="speciality">Especialidade</label>
              <input
                id="speciality"
                type="text"
                name="speciality"
                placeholder="Especialidade"
                required
                onChange={updateForm}
                value={form.speciality}
              />
            </div>
            <div className="textfield">
              <label for="healthInsurance">Plano de Saúde</label>
              <input
                id="healthInsurance"
                type="text"
                name="healthInsurance"
                placeholder="Plano de Saúde"
                required
                onChange={updateForm}
                value={form.healthInsurance}
              />
            </div>
            <div className="textfield">
              <label for="phoneNumber">Telefone</label>
              <input
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                placeholder="Telefone"
                required
                onChange={updateForm}
                value={form.phoneNumber}
              />
            </div>

            <div className="textfield">
              <label for="zipCode">CEP</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                placeholder="CEP"
                required
                onChange={updateForm}
                value={form.zipCode}
              />
            </div>
            <div className="textfield">
              <label for="address">Endereco</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Endereco"
                required
                onChange={updateForm}
                value={form.address}
              />
            </div>
            <div className="textfield">
              <label for="complemento">Complemento</label>
              <input
                id="complemento"
                type="text"
                name="complement"
                placeholder="Complemento (Opcional)"
                onChange={updateForm}
                value={form.complement}
              />
            </div>
            <p>
              Ao criar uma conta, você aceita os termos e condições de uso da
              Dr. Connect e reconhece que leu e entendeu nossa política de
              privacidade.
            </p>
            <button onClick={submitForm} className="btn-login trasitionButton">
            Prosseguir
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
