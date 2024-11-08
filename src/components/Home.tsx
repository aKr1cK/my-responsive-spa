import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    setCounter(1);
  }, 1000)
  const getGridHeight = () => {
    try {
      console.log("IN getGridHeight");
      let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      let headerHeight = Math.max(document.getElementsByClassName('navbar')[0].clientHeight || 0);
      //let breadCrumHeight = Math.max(document.getElementsByClassName('breadcrum1')[0].clientHeight || 0);
      //let buttonGrpHeight = Math.max(document.getElementsByClassName('buttonGrp1')[0].clientHeight || 0);
      let footerHeight = Math.max(document.getElementsByTagName('footer')[0].clientHeight || 0);
      let gridHeight = vh - headerHeight - /*breadCrumHeight - buttonGrpHeight -*/ footerHeight - 85;
      console.log("IN getGridHeight"+counter);
      return (gridHeight || 100);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="LOLA" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: getGridHeight() }}><h1>Welcome Home</h1></div>
  )
};

export default Home;
