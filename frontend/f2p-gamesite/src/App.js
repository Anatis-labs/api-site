import Header from "./Pages/header/Header.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


import GameInfo from "./Pages/GameInfo/GameInfo.js";
import GameImport from "./Pages/GameImport/GameImport.js";
import Jumbotron from "./Pages/Jumbotron/Jumbotron";
import Footer from "./Pages/Footer/Footer.js";
import GameImportType from "./Pages/GameImport/GameImportType.js";
import GameFilter from "./Pages/GameFilter/GameFilter.js";
import startPage from "./Pages/startPage/startPage.js";

function App() {
 

  return (
    <>
  <Header/>
    <Jumbotron/>
    <searchBox placeholder="Enter search word" handleChange={(e) => console.log(e)}/>
    <GameFilter/>
    <Router>

    <Switch>

    <Route path="/gameinfo/:GameId" GameId="GameInfo"  component={GameInfo}/>
    <Route path="/games/Shooters" render={(props) => <GameImportType type="shooter" {...props}/>}/>
    <Route path="/games/strategy" render={(props) => <GameImportType type="strategy" {...props}/>}/>
    <Route path="/games/mmorpg" render={(props) => <GameImportType type="mmorpg" {...props}/>}/>
    <Route path="/games/action" render={(props) => <GameImportType type="action" {...props}/>}/>  
    <Route path="/games/pvp" render={(props) => <GameImportType type="pvp" {...props}/>}/>
    <Route path="/games/strategy" component={GameImportType} />
    <Route path="/games" component={GameImport}/>  
    <Route path="/" component={startPage}/>
    
    </Switch>
    </Router>
    <Footer/>
</>
  );
}

export default App;