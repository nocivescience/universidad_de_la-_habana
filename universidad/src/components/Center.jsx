import "../static/css/Center.css";
import { CenterComponent } from "./CenterComponent";
import ArticuloLogo from "../assets/articulo-logo.jpg";
import PersonasRecibiendoDiplomas from "../assets/personas-recibiendo-diplomas.jpg";
import FotoAntigua from "../assets/foto-antigua.jpg";
import PersonasSentadas from "../assets/personas-sentadas.jpg";
export const Center = () => {
  return (
    <div className="center-container">
      <CenterComponent
        title="Pesquisador Virtual COVID 19"
        parrafo="Nueva herramienta que permite captar información sobre el estado de salud de la población"
        imagenes={[ArticuloLogo]}
      ></CenterComponent>
      <CenterComponent
        title="Acto por el 40 aniversario del destacamento Carlos Juan Finlay"
        parrafo="Un 12 de marzo de 1982 quedó constituido el Destacamento de Ciencias Médicas Carlos Juan Finlay, en honor al eminente científico y médico descubridor del agente transmisor de la fiebre amarrilla.
        Con la presencia de Jorge González Pérez, director de Docencia del Ministerio de Salud Pública, Mairim Lago Queija, rectora de la Universidad de Ciencias Médicas de la Habana y otros representantes de la universidad, dirigentes de la Unión de Jóvenes Comunistas, Federación Estudiantil Universitaria y Federación Estudiantil de la Enseñanza Media se realiza el acto por el 40 aniversario de la constitución del destacamento Carlos Juan Finlay."
        imagenes={[PersonasRecibiendoDiplomas,FotoAntigua,PersonasSentadas]}
      ></CenterComponent>
    </div>
  );
};
