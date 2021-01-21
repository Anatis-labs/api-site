import Header from "./Pages/header/Header.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


import GameInfo from "./Pages/GameInfo/GameInfo.js";
import Gameimport from "./Pages/GameImport/Gameimport.js";
import Jumbotron from "./Pages/Jumbotron/Jumbotron";
import Footer from "./Pages/Footer/Footer.js";

function App() {
  return (
    <>
  <Header/>
    <Jumbotron/>
    <Router>
    <Switch>
    <Route path="/games/info/" component={GameInfo}/>
    <Route path="/games" component={Gameimport}/>  
    <Route path="/"/>
    
    </Switch>
    </Router>
    <Footer/>
</>
  );
}

export default App;