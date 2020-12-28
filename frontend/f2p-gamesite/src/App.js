import Header from "./Pages/header/Header.js";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Gameimport from "./Pages/GameImport/Gameimport.js";
import Jumbotron from "./Pages/Jumbotron/Jumbotron";
import Footer from "./Pages/Footer/Footer.js";

function App() {
  return (
    <>
  <Header></Header>
    <Jumbotron/>
    <Gameimport/>
    <Footer/>
</>
  );
}

export default App;