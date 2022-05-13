import {useLocation, useNavigate} from "react-router-dom";
import ClientService from "../../service/ClientService";
import {Component} from "react";

export default function RootFunction (){
    const navigation = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    return <EmpreuntsById navigation={navigation} id={id} />
}

class EmpreuntsById extends Component{
    constructor(props) {
        super(props);
        this.state = {
            empreunts:[],
            idDoc : 0,
        }
    }


    componentDidMount() {
        ClientService.getEmpreunts(this.props.id).then(res =>{
            this.setState({empreunts: res.data})
        })
    }





    render() {
        return (
            <form className="menu-form">
                <h1>Empreunts</h1>
                <table className="cd">
                    <thead>
                    <tr>
                        <th>Document empreunte </th>
                        <th>Date de debut de l'empreunt</th>
                        <th>Date de fin de l'empreunt</th>
                        <th>Status de l'empreunt</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.empreunts.map(e =>
                            <tr key={e.idEmpreunt}>
                                <td>{e.idDocument}</td>
                                <td>{e.dateDebut}</td>
                                <td>{e.dateFin}</td>
                                <td>{e.status}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
        )
    }
}

