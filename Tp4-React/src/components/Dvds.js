import './css/Empreunt.css';
import ClientService from "../service/ClientService";
import {Component} from "react";
import {useNavigate} from "react-router-dom";

export default function RootFunction (){
    const navigation = useNavigate();
    return <Dvds navigation={navigation} />
}
class Dvds extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dvds:[],
        }
    }

    componentDidMount() {
        ClientService.getDvds().then(res =>{
            this.setState({dvds: res.data})
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
                <h1>DVD</h1>
                <table className="dvd">
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
                        this.state.dvds.map(dvd =>
                        <tr key={dvd.id}>
                            <td>{dvd.titre}</td>
                            <td>{dvd.anneePublication}</td>
                            <td>{dvd.auteur}</td>
                            <td>{dvd.nbrExemplaire}</td>
                            <td>{dvd.duration}</td>
                            <td className="type">{dvd.type}</td>
                            <td className="disable">
                                <input className={btn} type="submit" value={value}
                                       onClick={() => this.props.navigation(path,{state: {id: dvd.id}})}/></td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
        )
    }
}