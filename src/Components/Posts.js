import { useState } from 'react'

export default function Posts(){

const posts = [{imgPoster: "./assets/img/meowed.svg", namePoster: "meowed", img: "./assets/img/gato-telefone.svg", imgName: "Gato", imgRespond: "./assets/img/respondeai.svg", nameRespond: "respondeai", countRespond: 101523}, 
{imgPoster: "./assets/img/barked.svg", namePoster: "barked", img: "./assets/img/dog.svg", imgName: "Dog", imgRespond: "./assets/img/adorable_animals.svg", nameRespond: "adorable_animals", countRespond: 99159}, 
{imgPoster: "./assets/img/respondeai.svg", namePoster: "respondeai", img: "./assets/img/gato-telefone.svg", imgName: "Gato", imgRespond: "./assets/img/respondeai.svg", nameRespond: "respondeai", countRespond: 101523}, ]

  return(
      <div className="posts">
        {posts.map((props) => (
          <Post key={props.namePoster} imgPoster={props.imgPoster} namePoster={props.namePoster} img={props.img} imgName={props.imgName} imgRespond={props.imgRespond} nameRespond={props.nameRespond} countRespond={props.countRespond} />
        ))}
      </div>
    );
}

function Post(props){

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const heartClick = event => {
    setIsLiked(current => !current);
  };

  const doubleClick = event => {
    switch (event.detail) {
      case 1: {
        console.log('single click');
        break;
      }
      case 2: {
        setIsLiked(true)
        console.log('double click');
        break;
      }

      default:
        break;
    }
  }

  const saveClick = event => {
    setIsSaved(current => !current);
  }

  return(
    <div data-test="post" className="post">
      <div className="top-post">
        <div>
              <img src={props.imgPoster} alt={props.namePoster}/>
              {props.namePoster}
        </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
          <img data-test="post-image" onClick={doubleClick} src={props.img} alt={props.imgName} />
      <div className="bottom-post">
        <div className="button-post">
          <div>
            <ion-icon data-test="like-post" class={isLiked ? 'md hydrated liked' : 'md hydrated'} onClick={heartClick} name={isLiked ? 'heart' : 'heart-outline'}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
            <ion-icon data-test="save-post" onClick={saveClick} name={isSaved ? 'bookmark' : 'bookmark-outline'}></ion-icon>
        </div>
            <div className="liked-post">
              <img src={props.imgRespond} alt={props.nameRespond} />
              <p>
                Curtido por <span>{props.nameRespond}</span> e
                <span data-test="likes-number"> outras {isLiked ? props.countRespond + 1 : props.countRespond} pessoas</span>
              </p>
        </div>
      </div>
      <ion-icon class={isLiked ? 'md hydrated heart' : 'md hydrated hide'} name="heart"></ion-icon>
    </div>
  );
}