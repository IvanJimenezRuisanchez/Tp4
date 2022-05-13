import ClientService from "../service/ClientService";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function RootFunction (){
    const navigation = useNavigate();
    return <RetourDocument navigation={navigation} />
}
const RetourDocument = (props) => {
    const [retour ,setEmpreunt] = useState({
        userId : 0,
    });

    // eslint-disable-next-line no-restricted-globals
    const location = useLocation()
    const { id } = location.state

    function handle(e) {
        const  newData =  {...retour}
        newData[e.target.id] = e.target.value
        setEmpreunt(newData)
    }

    function post(e){
        ClientService.postRetour(retour.userId,id);
        props.navigation('/menuclient')
    }

    return (
        <form className='menu-form' onSubmit={(event => post(event))}>
            <h1>Empreunt</h1>
            <div className='form-control'>
                <label>Utilisateur responsable</label>
                <input onChange={(event => handle(event))} type="number" id="userId"  value={retour.userId} name="lname" className="input"/>
            </div>
            <div className='form-control'>
                <input type="submit"  className="btnChoix" value="Retourner"/>
            </div>
        </form>
    )
}
