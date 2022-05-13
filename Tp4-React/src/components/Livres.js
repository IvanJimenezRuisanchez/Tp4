import './css/Empreunt.css';
import ClientService from "../service/ClientService";
import {Component} from "react";
import {useNavigate} from "react-router-dom";

export default function RootFunction (){
    const navigation = useNavigate();
    return <Livres navigation={navigation} />
}
class Livres extends Component{

    constructor(props) {
        super(props);
        this.state = {
            livres:[],
            dispo: true,
        }
    }

    componentDidMount() {
        ClientService.getLivres().then(res =>{
            this.setState({livres: res.data})
        })
    }


    render() {
        let btn = "btnRetour";
        let value = "Retourner";
        let path= '/retour';
        if(document.documentURI.charAt(document.documentURI.length-1) == 't'){
            btn = "btnEmpreunt";
            value = "Empreunter";
            path ="/empreunt";
        }
        return (
            <form className='menu-form'>
                <h1>LIVRE</h1>
                <table className="livre">
                    <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Anne Publication</th>
                        <th>Auteur</th>
                        <th>Nombre Exemplaires</th>
                        <th>Editeur</th>
                        <th>Maison de Publication</th>
                        <th className="type">Type</th>
                        <th className="disable"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.livres.map(livre =>
                            <tr key={livre.id}>
                                <td>{livre.titre}</td>
                                <td>{livre.anneePublication}</td>
                                <td>{livre.auteur}</td>
                                <td>{livre.nbrExemplaire}</td>
                                <td>{livre.editeur}</td>
                                <td>{livre.maisonDePublication}</td>
                                <td className="type">{livre.type}</td>
                                <td className="disable">
                                    <input className={btn} type="submit" value={value}
                                           onClick={() => this.props.navigation(path,{state: {id: livre.id}})}/></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
        )
    }
}