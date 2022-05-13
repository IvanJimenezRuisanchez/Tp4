import './css/Empreunt.css';
import ClientService from "../service/ClientService";
import {Component} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function RootFunction (){
    const navigation = useNavigate();
    return <Cds navigation={navigation}/>
}

class Cds extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cds:[],
            idDoc : 0,
        }
    }

    componentDidMount() {
        ClientService.getCds().then(res =>{
            this.setState({cds: res.data})
        })
    }



    render() {
        let btn = "btnRetour";
        let value = "Retourner"
        let path= '/retour'
        if(document.documentURI.charAt(document.documentURI.length-1) == 't'){
            btn = "btnEmpreunt";
            value = "Empreunter"
             path ="/empreunt"
        }
        return (

            <form className='menu-form'>
                <h1>CD</h1>
                <table className="cd">
                    <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Anne Publication</th>
                        <th>Auteur</th>
                        <th>Nombre Exemplaires</th>
                        <th>Duration</th>
                        <th className="type">Type</th>
                        <th className="disable"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cds.map(cd =>
                            <tr key={cd.id}>
                                <td>{cd.titre}</td>
                                <td>{cd.anneePublication}</td>
                                <td>{cd.auteur}</td>
                                <td>{cd.nbrExemplaire}</td>
                                <td>{cd.duration}</td>
                                <td className="type">{cd.type}</td>
                                <td className="disable">
                                    <input className={btn} type="submit" value={value}
                                    onClick={() => this.props.navigation(path,{state: {id: cd.id}})}/></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
        )
    }
}

