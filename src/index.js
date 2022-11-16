//React
import React from 'react';
import ReactDOM from 'react-dom/client';
//Imagens-Profiles
import logo from './assets/img/logo.png';
import gag from './assets/img/9gag.svg';
import meowed from './assets/img/meowed.svg';
import barked from './assets/img/barked.svg';
import nathan from './assets/img/nathanwpylestrangeplanet.svg';
import wawa from './assets/img/wawawicomics.svg';
import respondeai from './assets/img/respondeai.svg';
import filomoderna from './assets/img/filomoderna.svg';
import memeriagourmet from './assets/img/memeriagourmet.svg';
import catanacomics from './assets/img/catanacomics.svg';
import badVibesMemes from './assets/img/bad.vibes.memes.svg';
import chibiDart from './assets/img/chibirdart.svg';
import razoesParaAcreditar from './assets/img/razoesparaacreditar.svg';
import adorable_animals from './assets/img/adorable_animals.svg';
import smallCuteCats from './assets/img/smallcutecats.svg';
//Imagens-Feeds
import gatoTelefone from './assets/img/gato-telefone.svg';
import cachorro from './assets/img/dog.svg';
import video from './assets/videos/video.mp4';
import audio from './assets/videos/video.ogv';
//Styles
import './reset.css';
import './style.css';

function Header(){
  return(
    <div class="topo">
      <div class="container-topo desktop">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src={logo} />
        </div>
        <div class="busca">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="botoes">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <div class="container-topo mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src={logo}  />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  );
}

function Container(){
  return(
    <div class="container">
      <div class="conteudo-princial">
        <div class="stories">
          <div>
            <div class="story">
              <img src={gag} />
            </div>
            9gag
          </div>
          <div>
            <div class="story">
              <img src={meowed} />
            </div>
            meowed
          </div>
          <div>
            <div class="story">
              <img src={barked} />
            </div>
            barked
          </div>
          <div>
            <div class="story">
              <img src={nathan} />
            </div>
            nathanwpylestrangeplanet
          </div>
          <div>
            <div class="story">
              <img src={wawa} />
            </div>
            wawawicomics
          </div>
          <div>
            <div class="story">
              <img src={respondeai} />
            </div>
            respondeai
          </div>
          <div>
            <div class="story">
              <img src={filomoderna} />
            </div>
            filomoderna
          </div>
          <div>
            <div class="story">
              <img src={memeriagourmet} />
            </div>
            memeriagourmet
          </div>
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        <div class="feeds">
          <div class="feed">
            <div class="topo-feed">
              <div>
                <img src={meowed} />
                meowed
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={gatoTelefone} alt="" />
            <div class="rodape-feed">
              <div class="feed-botoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div class="feed-curtidas">
                <img src={respondeai} alt="" />
                <p>
                  Curtido por <span>respondeai</span> e
                  <span> outras 101.523 pessoas</span>
                </p>
              </div>
            </div>
          </div>
          <div class="feed">
            <div class="topo-feed">
              <div>
                <img src={barked} />
                barked
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={cachorro} alt="" />
            <div class="rodape-feed">
              <div class="feed-botoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div class="feed-curtidas">
                <img src={adorable_animals} alt="" />
                <p>
                  Curtido por <span>adorable_animals</span> e
                  <span> outras 99.159 pessoas</span>
                </p>
              </div>
            </div>
          </div>
          <div class="feed">
            <div class="topo-feed">
              <div>
                <img src={respondeai} />
                Responde aí
              </div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <video controls autoplay>
                  <source src={video} type="video/mp4"/>
                  <source src={audio} type="video/ogv"/>
            </video>
            <div class="rodape-feed">
              <div class="feed-botoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div class="feed-curtidas">
                <img src={respondeai} alt="" />
                <p>
                  Curtido por <span>respondeai</span> e
                  <span>outras 101.523 pessoas</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="div-profile">
          <div>
            <img src={catanacomics} />
          </div>
          <div>
            <p class="profile-username">catanacomics</p>
            <p class="profile-name">Catana</p>
          </div>
        </div>
        <div class="cab-lista-sugestoes">
          <p>Sugestões para você</p>
          <p>Ver tudo</p>
        </div>
        <div class="sugestoes">
          <div class="sugestao">
            <div class="sugestao-profile">
              <div>
                <img src={badVibesMemes} />
              </div>
              <div>
                <p class="sugestao-profile-username">bad.vibes.memes</p>
                <p class="segue-voce">Segue você</p>
              </div>
            </div>
            <p class="seguir">Seguir</p>
          </div>
          <div class="sugestao">
            <div class="sugestao-profile">
              <div>
                <img src={chibiDart} />
              </div>
              <div>
                <p class="sugestao-profile-username">chibirdart</p>
                <p class="segue-voce">Segue você</p>
              </div>
            </div>
            <p class="seguir">Seguir</p>
          </div>
          <div class="sugestao">
            <div class="sugestao-profile">
              <div>
                <img src={razoesParaAcreditar} />
              </div>
              <div>
                <p class="sugestao-profile-username">razoesparaacreditar</p>
                <p class="segue-voce">Novo no Instagram</p>
              </div>
            </div>
            <p class="seguir">Seguir</p>
          </div>
          <div class="sugestao">
            <div class="sugestao-profile">
              <div>
                <img src={adorable_animals} />
              </div>
              <div>
                <p class="sugestao-profile-username">adorable_animals</p>
                <p class="segue-voce">Segue você</p>
              </div>
            </div>
            <p class="seguir">Seguir</p>
          </div>
          <div class="sugestao">
            <div class="sugestao-profile">
              <div>
                <img src={smallCuteCats} />
              </div>
              <div>
                <p class="sugestao-profile-username">smallcutecats</p>
                <p class="segue-voce">Segue você</p>
              </div>
            </div>
            <p class="seguir">Seguir</p>
          </div>
        </div>
        <div class="info-sobre-intagram">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Header());
root.render(Container());