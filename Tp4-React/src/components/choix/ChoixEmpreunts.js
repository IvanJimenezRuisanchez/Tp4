import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function RootFunction (){
    const navigation = useNavigate();
    return <ChoixEmpreunts navigation={navigation} />
}

const ChoixEmpreunts= (props) =>{
    const [empreunt ,setEmpreunt] = useState({
        userId : 0,
    });

    function handle(e) {
        const  newData =  {...empreunt}
        newData[e.target.id] = e.target.value
        setEmpreunt(newData)
    }

    function post(){
        props.navigation('/empreunts',{state: {id: empreunt.userId}})
    }
    return (
        <form className="menu-form">
            <h1>Empreunts</h1>
            <div className='form-control'>
                <label>Numero d'utilisateur</label>
                <input onChange={(event => handle(event))} type="number" id="userId" name="lname" className="input" value={empreunt.userId}/>
            </div>
            <div className='form-control'>
                <input type="submit"  className="btnChoix" value="Suivant" onClick={post}/>
            </div>
        </form>
    )
}