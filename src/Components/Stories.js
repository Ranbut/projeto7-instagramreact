export default function Stories(){
  const stories = [{img: "./assets/img/9gag.svg", name: "9gag"},
  {img: "./assets/img/meowed.svg", name: "meowed"},
  {img: "./assets/img/barked.svg", name: "barked"},
  {img: "./assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpyle..."},
  {img: "./assets/img/wawawicomics.svg", name: "wawawic..."},
  {img: "./assets/img/respondeai.svg", name: "respondeai"},
  {img: "./assets/img/filomoderna.svg", name: "filomoderna"},
  {img: "./assets/img/memeriagourmet.svg", name: "memeriagourmet"},]


  return(
        <div className="stories">
          {stories.map((props) => (
            <Story key={props.name} img={props.img} name={props.name}/>
          ))}
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function Story(props){
  return(
  <div>
    <div className="story">
      <img src={props.img} alt={props.name}/>
    </div>
    {props.name}
  </div>
  );
}