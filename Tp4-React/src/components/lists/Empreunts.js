import {useLocation, useNavigate} from "react-router-dom";
import {Component} from "react";
import AdminService from "../../service/AdminService";

export default function RootFunction (){
    const navigation = useNavigate();
    return <Empreunts navigation={navigation} />
}

class Empreunts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            empreunts:[],
        }
    }


    componentDidMount() {
        AdminService.getAllEmpreunts().then(res =>{
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
                            <tr>
                                <td>{e.idDocument}</td>
                                <td>{e.dateDebut}</td>
                                <td>{e.idDocument}</td>
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

