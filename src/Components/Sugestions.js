export default function Sugestions(){
  const sugestions = [{img: "./assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", itIs: "Segue Você"},
  {img: "./assets/img/chibirdart.svg", name: "chibirdart", itIs: "Segue Você"},
  {img: "./assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", itIs: "Novo no Instagram"},
  {img: "./assets/img/adorable_animals.svg", name: "adorable_animals", itIs: "Segue Você"},
  {img: "./assets/img/smallcutecats.svg", name: "smallcutecats", itIs: "Segue Você"}]

  return(
        <div className="sugetions">
          {sugestions.map((props) => (
            <Sugestion key={props.name} img={props.img} name={props.name} itIs={props.itIs} />
         ))}
        </div>
    );
}

function Sugestion(props){
  return (
  <div className="sugetion">
    <div className="sugetion-profile">
      <div>
        <img src={props.img} alt={props.name}/>
      </div>
      <div>
        <p className="sugetion-profile-username">{props.name}</p>
        <p className="follows-you">{props.itIs}</p>
      </div>
    </div>
    <p className="follow">Seguir</p>
  </div>);
}