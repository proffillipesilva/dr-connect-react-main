import React from "react";
import "../css/about-us.css";
import Image1 from "../images/dispositivo-sobrenos.svg";
import Image2 from "../images/design-sobrenos.svg";
import Image3 from "../images/agende-sobrenos.svg";
import Image4 from "../images/mission-sobrenos.svg";
import Image5 from "../images/vision-sobrenos.svg";
import Image6 from "../images/values-sobrenos.svg";

const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div class="body">
        <div class="card-body-main">
          <div class="card-text-left">
            <h3>
              CONECTANDO
              <br />
              MÉDICOS E <br />
              PACIENTES
            </h3>
          </div>
        </div>
        <div class="accessibility">
          <h2>Acessibilidade e Facilidade</h2>
          <p>
            Oferecemos uma plataforma que inova em seu modo de realizar
            agendamentos médicos
          </p>
        </div>
      </div>
      <div class="footer">
        <div class="header-footer">
          <div class="desc-image">
            <img src={Image1} alt="" />
          </div>
          <div class="desc-image">
            <img src={Image2} alt="" />
          </div>
          <div class="desc-image">
            <img src={Image3} alt="" />
          </div>
        </div>
        <div class="footer-body">
          <div class="our">
            <div class="image-right">
              <img src={Image4} alt="Doutora nossa missão" />
            </div>
            <div class="text-left">
              <h3>Nossa Missão</h3>
              <p>
                Aos pacientes, prover a liberdade de marcar 
                suas consultas sem burocracias, com facilidade e agilidade.
                
                Aos profissionais da saúde, possibilitar a
                captação de clientes de maneira simples e descomplicada.
              </p>
            </div>
          </div>
          <br style={{clear: "both"}} />
          <div class="our">
          <div class="image-left">
              <img src={Image5} alt="Doutor nossa visão" />
            </div>
            <div class="text-right">
              <h3>Nossa Visão</h3>
              <p>
                Estar entre as plataformas de agendamento mais utilizadas em
                território nacional até 2028 e liberar agendas para
                profissionais do SUS até 2035.
              </p>
            </div>
            
          </div>
          <br style={{clear: "both"}} />
          <div class="our">
            <div class="image-right">
              <img src={Image6} alt="Doutor nosso valores" />
            </div>
            <div class="text-left">
              <h3>Nossos Valores</h3>
              <p>
                Todos merecem uma plataforma que se adeque as suas necessidades;
               
                A satisfação do cliente é muito importante, são eles que tornam
                tudo isso possível; 
                Nossa preocupação com o meio ambiente é muito séria, estamos
                tornando o mundo melhor para as próximas gerações.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
