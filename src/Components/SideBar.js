import Sugestion from "./Sugestion";
import User from "./User";

export default function SideBar(){
    return(
        <div className="sidebar">
        <User/>
        <div className="cab-lista-sugestoes">
          <p>Sugestões para você</p>
          <p>Ver tudo</p>
        </div>
        <Sugestion />
        <div className="info-sobre-intagram">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    );
}