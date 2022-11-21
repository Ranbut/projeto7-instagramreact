import { useState } from 'react'
import validator from 'validator';

export default function User(){
  const [userText, setUserText] = useState("Catana");
  const [userImage, setUserImage] = useState("./assets/img/catanacomics.svg");

  function changeName() {
    let text;

    while(!text){
      text = prompt("Insira seu nome:");
      if (text === null) {
        return; //Botão de cancelar
    }
      if(!text){
        alert("Não pode deixar o nome vazio!");
      }
  }
  setUserText(text);
  }

  function changeImage() {
    let text;

    while(!text){
      text = prompt("Insira a URL da sua imagem:");
      if (text === null) {
        return; //Botão de cancelar
    }
      if(!text){
        alert("Não pode deixar a URL vazio!");
      }
      if(text && !validator.isURL(text)){
        text = "";
        alert("Texto não é URL!");
      }
  }
  setUserImage(text);
  }

  return(
        <div data-test="user" className="div-profile">
        <div>
          <img data-test="profile-image" onClick={changeImage} src={userImage} alt="catanacomics"/>
        </div>
        <div>
          <p className="profile-username">catanacomics</p>
          <p data-test="name" className="profile-name">{userText}<ion-icon data-test="edit-name" onClick={changeName} name="pencil-outline"></ion-icon></p>
        </div>
      </div>
    );
}