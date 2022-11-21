import { useState } from 'react'

export default function User(){
  const [userText, setUserText] = useState("Catana");
  const [userImage, setUserImage] = useState("./assets/img/catanacomics.svg");

  return(
        <div data-test="user" className="div-profile">
        <div>
          <img data-test="profile-image" onClick={() => setUserImage(prompt("Insira URL da sua imagem:"))} src={userImage} alt="catanacomics"/>
        </div>
        <div>
          <p className="profile-username">catanacomics</p>
          <p data-test="name" className="profile-name">{userText}<ion-icon data-test="edit-name" onClick={() => setUserText(prompt("Insira seu nome:"))} name="pencil-outline"></ion-icon></p>
        </div>
      </div>
    );
}