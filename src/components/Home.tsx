import { Container } from "react-bootstrap";

// src/components/Home.j
const Home = () => {
  const getGridHeight = () => {
    try{
      let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      let headerHeight = Math.max(document.getElementsByClassName('navbar')[0].clientHeight || 0);
      let breadCrumHeight = Math.max(document.getElementsByClassName('breadcrum1')[0].clientHeight || 0);
      let buttonGrpHeight = Math.max(document.getElementsByClassName('buttonGrp1')[0].clientHeight || 0);
      let footerHeight = Math.max(document.getElementsByTagName('footer')[0].clientHeight || 0);
      let gridHeight = vh - headerHeight - breadCrumHeight - buttonGrpHeight - footerHeight - 85;
      return gridHeight;
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div style={{display:'flex',justifyContent:'center',height: getGridHeight()}}>Welcome Home</div>
  )
};

export default Home;
