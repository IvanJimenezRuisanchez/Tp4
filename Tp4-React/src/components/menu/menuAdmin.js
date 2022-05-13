import {useNavigate} from "react-router-dom";

const MenuAdmin = (props) =>{
    const history = useNavigate();

    function toAjoutDoc() {
        history("/ajoutDocument");
    }

    function toAjoutClient() {
        history("/ajoutClient");
    }

    function toClients() {
        history("/clients");
    }

    function toEmpreuntsList() {
        history("/empreuntsList");
    }
    function toMain() {
        history("/");
    }
    return (
        <form className='menu-form'>
            <h1>Fonctionnalités Admin</h1>
            <div className='form-control'>
                <label>Ajouter un document</label>
                <input type='submit' value='Ajout' className='btn' onClick={toAjoutDoc}/>
            </div>
            <div className='form-control'>
                <label>Ajouter un client</label>
                <input type='submit' value='Ajout' className='btn' onClick={toAjoutClient}/>
            </div>
            <div className='form-control'>
                <label>Voir les empreunts</label>
                <input type='submit' value='Lister' className='btn' onClick={toEmpreuntsList}/>
            </div>
            <div className='form-control'>
                <label>Voir les clients</label>
                <input type='submit' value='Lister' className='btn' onClick={toClients}/>
            </div>
            <div className='form-control'>
                <label>Recherche d'un document</label>
                <input type='submit' value='Recherche' className='btn' onClick={props.rechercher}/>
            </div>
            <div className='form-controlChoixUser'>
                <input  type='submit' value='Page Debut' className='btnChoix' onClick={toMain}/>
            </div>
        </form>
    )
}

export default MenuAdmin;