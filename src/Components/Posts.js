import React, { useState } from 'react'

export default function Posts(){

const posts = [{imgPoster: "./assets/img/meowed.svg", namePoster: "meowed", img: "./assets/img/gato-telefone.svg", imgName: "Gato", imgRespond: "./assets/img/respondeai.svg", nameRespond: "respondeai", countRespond: 101523}, 
{imgPoster: "./assets/img/barked.svg", namePoster: "barked", img: "./assets/img/dog.svg", imgName: "Dog", imgRespond: "./assets/img/adorable_animals.svg", nameRespond: "adorable_animals", countRespond: 99159}, 
{imgPoster: "./assets/img/respondeai.svg", namePoster: "respondeai", img: "./assets/img/gato-telefone.svg", imgName: "Gato", imgRespond: "./assets/img/respondeai.svg", nameRespond: "respondeai", countRespond: 101523}, ]

  return(
      <div className="feeds">
        {posts.map((props) => (
          <Post key={props.namePoster} imgPoster={props.imgPoster} namePoster={props.namePoster} img={props.img} imgName={props.imgName} imgRespond={props.imgRespond} nameRespond={props.nameRespond} countRespond={props.countRespond} />
        ))}
      </div>
    );
}

function Post(props){

  const [isActive, setIsActive] = useState(false);

  const heartClick = event => {
    setIsActive(current => !current);
  };

  const doubleClick = event => {
    switch (event.detail) {
      case 1: {
        console.log('single click');
        break;
      }
      case 2: {
        setIsActive(current => !current);
        console.log('double click');
        break;
      }

      default:
        break;
    }
  }

  return(
    <div className="feed">
      <div className="topo-feed">
        <div>
              <img src={props.imgPoster} alt={props.namePoster}/>
              {props.namePoster}
        </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
          <img onClick={doubleClick} src={props.img} alt={props.imgName} />
      <div className="rodape-feed">
        <div className="feed-botoes">
          <div>
            <ion-icon class={isActive ? 'md hydrated liked' : 'md hydrated'} onClick={heartClick} name={isActive ? 'heart' : 'heart-outline'}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
            <div className="feed-curtidas">
              <img src={props.imgRespond} alt={props.nameRespond} />
              <p>
                Curtido por <span>{props.nameRespond}</span> e
                <span> outras {isActive ? props.countRespond + 1 : props.countRespond} pessoas</span>
              </p>
        </div>
      </div>
    </div>
  );
}