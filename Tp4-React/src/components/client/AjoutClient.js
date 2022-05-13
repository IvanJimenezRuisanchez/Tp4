import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AdminService from "../../service/AdminService";

export default function RootFunction (){
    const navigation = useNavigate();
    return <AjoutClient navigation={navigation}/>
}

const AjoutClient= (props) => {
    const [ajout, setAjout] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });


    function handle(e) {
        const newData = {...ajout}
        newData[e.target.id] = e.target.value
        setAjout(newData)
    }

    function post(e) {
        AdminService.postClient(ajout.firstName, ajout.lastName, ajout.address, ajout.phoneNumber, ajout.email)
        props.navigation('/menuadmin')
    }

    return (
        <form className='menu-form' onSubmit={(event => post(event))}>
            <h1>Ajouter un Cd</h1>
            <div className='form-control'>
                <label>Prenom</label>
                <input onChange={(event => handle(event))} type="text" id="firstName" value={ajout.firstName}
                       className="input"/>
            </div>
            <div className='form-control'>
                <label>Nom de famille</label>
                <input onChange={(event => handle(event))} type="text" id="lastName" value={ajout.lastName}
                       className="input"/>
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input onChange={(event => handle(event))} type="text" id="address" value={ajout.address}
                       className="input"/>
            </div>
            <div className='form-control'>
                <label>Numero de telephone</label>
                <input onChange={(event => handle(event))} type="text" id="phoneNumber" value={ajout.phoneNumber}
                       className="input"/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input onChange={(event => handle(event))} type="email" id="email" value={ajout.email}
                       className="input"/>
            </div>
            <div className='form-control'>
                <input type="submit" className="btnChoix" value="Empreunter"/>
            </div>
        </form>
    )
}