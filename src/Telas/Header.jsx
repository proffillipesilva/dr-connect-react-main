import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import "../css/Header.css";

const Header = (props) => {
  return (
    <div id="Header">
    <div className="header">
      <div className="logo">
        <img src={Logo} className="logo" alt="Logo"></img>
      </div>
      <div class="menu">
        <nav>
          {props.loggedIn ? (
            props.role === "ROLE_PATIENT" ? (
              <ul>
                <li>
                  <NavLink to={"/home"}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/agenda"}> Agendamento </NavLink>
                </li>
                <li>
                  <NavLink to={"/busca"}> Buscar </NavLink>
                </li>
                <li>
                  <NavLink to={"/edit-profile"}> Perfil </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to={"/home"}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/agenda"}> Minha Agenda </NavLink>
                </li>
                <li>
                  <NavLink to={"/edit-profile"}> Perfil </NavLink>
                </li>
              </ul>
            )
          ) : (
            <ul>
              <li>
                <NavLink to={"/home"}> Login </NavLink>
              </li>
              <li>
                <NavLink to={"/nossos-servicos"}> Nossos Serviços </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Header;
