import ClientService from "../../service/ClientService";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AdminService from "../../service/AdminService";

export default function RootFunction (){
    const navigation = useNavigate();
    return <AjoutCd navigation={navigation}/>
}

const AjoutCd = (props) => {
    const [ajout ,setAjout] = useState({
        titre: "",
        annePub: "",
        auteur: "",
        nbrExemplaires: "",
        duration: "",
        type: "",
    });


    function handle(e) {
        const  newData =  {...ajout}
        newData[e.target.id] = e.target.value
        setAjout(newData)
    }

    function post(e){
        AdminService.postCd(ajout.titre,ajout.annePub,ajout.auteur,ajout.nbrExemplaires,ajout.duration,ajout.type)
        props.navigation('/menuadmin')
    }

    return (
        <form className='menu-form' onSubmit={(event => post(event))}>
            <h1>Ajouter un Cd</h1>
            <div className='form-control'>
                <label>Titre</label>
                <input onChange={(event => handle(event))} type="text" id="titre"  value={ajout.titre} className="input"/>
            </div>
            <div className='form-control'>
                <label>Anne Publication</label>
                <input onChange={(event => handle(event))} type="number" id="annePub"  value={ajout.annePub}  className="input"/>
            </div>
            <div className='form-control'>
                <label>Auteur</label>
                <input onChange={(event => handle(event))} type="text" id="auteur"  value={ajout.auteur}  className="input"/>
            </div>
            <div className='form-control'>
                <label>Nombre Exemplaires</label>
                <input onChange={(event => handle(event))} type="number" id="nbrExemplaires"  value={ajout.nbrExemplaires}  className="input"/>
            </div>
            <div className='form-control'>
                <label>Duration</label>
                <input onChange={(event => handle(event))} type="text" id="duration"  value={ajout.duration} className="input"/>
            </div>
            <div className='form-control'>
                <label>Type</label>
                <input onChange={(event => handle(event))} type="text" id="type"  value={ajout.type}  className="input"/>
            </div>
            <div className='form-control'>
                <input type="submit"  className="btnChoix" value="Empreunter"/>
            </div>
        </form>
    )
}