export default function NavBar(){

    return(
    <div className="topo">
        <div className="container-topo desktop">
            <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="assets/img/logo.png" alt="Instagram"/>
            </div>
            <div className="busca">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div className="botoes">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
        <div className="container-topo mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="assets/img/logo.png" alt="Instagram"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </div>
    );
}