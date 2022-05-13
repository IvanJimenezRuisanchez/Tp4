import '../css/Choixuser.css';
import { useNavigate } from 'react-router-dom' ;

const ChoixUser = (props) => {
    const history = useNavigate();

    function toDvd() {
        history("/ajoutDvd");
    }

    function toCd() {
        history("/ajoutCd");
    }

    function toLivre() {
        history("/ajoutLivre");
    }

    return (
        <form className='menu-form'>
            <h1>Choix d'utilisateur </h1>
            <div className='form-controlChoixUser'>
                <input  type='submit' value='Livre' className='btnChoix' onClick={toLivre}/>
            </div>
            <div className='form-controlChoixUser'>
                <input type='submit' value='CD' className='btnChoix' onClick={toCd}/>
            </div>
            <div className='form-controlChoixUser'>
                <input type='submit' value='DVD' className='btnChoix' onClick={toDvd}/>
            </div>
        </form>
    )
}

export default ChoixUser;