import './App.css';
import ChoixUser from "./components/choix/ChoixUser";
import {Fragment, useState} from "react";
import Menuclient from "./components/menu/menuClient";
import Menuadmin from "./components/menu/menuAdmin";
import EmpreuntDocument from "./components/empreunt/empreuntDocument";
import RetourDocument from "./retour/retourDocument";
import ChoixRecherche from "./components/choix/ChoixRecherche";
import Empreunts from "./components/lists/Empreunts";
import ChoixEmpreunts from "./components/choix/ChoixEmpreunts";
import Dvds from "./components/Dvds";
import Cds from "./components/Cds";
import Livres from "./components/Livres";
import Ajoutcd from "./components/docs/AjoutCd"
import Ajoutdvd from "./components/docs/AjoutDvd"
import Ajoutlivre from "./components/docs/AjoutLivre"
import {BrowserRouter, Route, Routes , useParams} from "react-router-dom";
import AjoutDocument from "./components/docs/AjoutDocument";
import AjoutClient from "./components/client/AjoutClient"
import Clients from "./components/lists/Clients"
import EmpreuntsById from "./components/empreunt/EmpreuntsById"
function App() {
  const [state, setState] = useState();
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/retour" element={<RetourDocument/>}/>
                  <Route path="/empreunt" element={<EmpreuntDocument/>}/>
                  <Route path="/empreuntsList" element={<Empreunts/>}/>
                  <Route path="/clients" element={<Clients/>}/>
                  <Route path="/ajoutClient" element={<AjoutClient/>}/>
                  <Route path="/ajoutDocument" element={<AjoutDocument/>}/>
                  <Route path="/ajoutLivre" element={<Ajoutlivre/>}/>
                  <Route path="/ajoutCd" element={<Ajoutcd/>}/>
                  <Route path="/ajoutDvd" element={<Ajoutdvd/>}/>
                  <Route path="/cds" element={<Cds/>}/>
                  <Route path="/dvds" element={<Dvds/>}/>
                  <Route path="/livres" element={<Livres/>}/>
                   <Route index element={<ChoixUser />} />
                   <Route path="/menuclient" element={<Menuclient/>} />
                   <Route path="/recherche" element={<ChoixRecherche/>} />
                   <Route path="/menuAdmin" element={<Menuadmin/>} />
                   <Route path='/documentsEmpreunt' element={
                       <Fragment>
                           <Cds></Cds>
                           <Dvds></Dvds>
                           <Livres></Livres>
                       </Fragment>
                   }/>
                  <Route path='/documentsRetour' element={
                      <Fragment>
                          <Cds></Cds>
                          <Dvds></Dvds>
                          <Livres></Livres>
                      </Fragment>
                  }/>
                  <Route path="/empreunts" element={<EmpreuntsById/>}/>
                  <Route path="/choixEmpreunt" element={<ChoixEmpreunts/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;
