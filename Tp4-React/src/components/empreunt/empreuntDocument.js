import ClientService from "../../service/ClientService";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function RootFunction (){
    const navigation = useNavigate();
    return <EmpreuntDocument navigation={navigation} />
}
const EmpreuntDocument = (props) => {
    const [empreunt ,setEmpreunt] = useState({
        userId : 0,
        dateDebut : "",
    });

    // eslint-disable-next-line no-restricted-globals
    const location = useLocation()
    const { id } = location.state

    function handle(e) {
        const  newData =  {...empreunt}
        newData[e.target.id] = e.target.value
        setEmpreunt(newData)
    }

    function post(e){
        ClientService.postEmpreunt(empreunt.userId,empreunt.dateDebut,id);
        props.navigation('/menuclient')
    }

    return (
        <form className='menu-form' onSubmit={(event => post(event))}>
            <h1>Empreunt</h1>
            <div className='form-control'>
                <label>Utilisateur responsable</label>
                <input onChange={(event => handle(event))} type="number" id="userId"  value={empreunt.userId} name="lname" className="input"/>
            </div>
            <div className='form-control'>
                <label>Date du debut de l'empreunt</label>
                <input type="date" onChange={(event => handle(event))} id="dateDebut" value={empreunt.dateDebut} className="input"/>
            </div>
            <div className='form-control'>
                <input type="submit"  className="btnChoix" value="Empreunter"/>
            </div>
        </form>
    )
}
