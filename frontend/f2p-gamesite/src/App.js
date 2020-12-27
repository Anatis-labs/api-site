import Header from "./Pages/header/Header.js";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Gameimport from "./Pages/GameImport/Gameimport.js";
import Jumbotron from "./Pages/Jumbotron/Jumbotron";
import Footer from "./Pages/Footer/Footer.js";

function App() {
  return (
    <>
  <Header></Header>
    <Jumbotron></Jumbotron>
    <Gameimport></Gameimport>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

    <Footer></Footer>
</>
  );
}

export default App;