import '../css/Choixuser.css';
import { useNavigate } from 'react-router-dom' ;

const ChoixUser = (props) => {
    const history = useNavigate();

    function toClientMenu() {
        history("/menuclient");
    }

    function toAdminMenu() {
        history("/menuadmin");
    }

    return (
        <form className='menu-form'>
            <h1>Choix d'utilisateur </h1>
            <div className='form-controlChoixUser'>
                <input  type='submit' value='Utilisateur' className='btnChoix' onClick={toClientMenu}/>
            </div>
            <div className='form-controlChoixUser'>
                <input type='submit' value='Admin' className='btnChoix' onClick={toAdminMenu}/>
            </div>
        </form>
    )
}

export default ChoixUser;