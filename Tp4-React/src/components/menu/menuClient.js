import {useNavigate} from "react-router-dom";

const MenuClient = (props) =>{
    const history = useNavigate();

    function toChoixEmpreunt() {
        history("/choixEmpreunt");
    }

    function toEmpreunt() {
        history("/documentsEmpreunt");
    }

    function toRetour() {
        history("/documentsRetour");
    }

    function toRecherche() {
        history("/recherche");
    }

    function toMain() {
        history("/");
    }

    return (
        <form className='menu-form'>
            <h1>Fonctionnalités Client</h1>
            <div className='form-control'>
                <label>Voir mes empreunts</label>
                <input type='submit' value='Lister' className='btn' onClick={toChoixEmpreunt}/>
            </div>
            <div className='form-control'>
                <label>Retourner un document</label>
                <input type='submit' value='Retourner' className='btn' onClick={toRetour}/>
            </div>
            <div className='form-control'>
                <label>Recherche d'un document</label>
                <input type='submit' value='Recherche' className='btn' onClick={toRecherche}/>
            </div>
            <div className='form-control'>
                <label>Empreunter un document</label>
                <input type='submit' value='Empreunter' className='btn' onClick={toEmpreunt}/>
            </div>
            <div className='form-controlChoixUser'>
                <input  type='submit' value='Page Debut' className='btnChoix' onClick={toMain}/>
            </div>
        </form>
    )
}

export default MenuClient;