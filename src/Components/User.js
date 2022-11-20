import React, { useState } from 'react'

export default function User(){
  const [userText, setUserText] = useState("Catana");
  const [userImage, setUserImage] = useState("./assets/img/catanacomics.svg");

  return(
        <div className="div-profile">
        <div>
          <img onClick={() => setUserImage(prompt("Insira URL da sua imagem:"))} src={userImage} alt="catanacomics"/>
        </div>
        <div>
          <p className="profile-username">catanacomics</p>
          <p className="profile-name">{userText}<ion-icon onClick={() => setUserText(prompt("Insira seu nome:"))} name="pencil-outline"></ion-icon></p>
        </div>
      </div>
    );
}