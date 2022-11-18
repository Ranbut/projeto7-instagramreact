import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Body(){
  return(
    <div className="container">
      <div className="conteudo-princial">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
    );
}