
import {Component} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AdminService from "../../service/AdminService";

export default function RootFunction (){
    const navigation = useNavigate();
    return <Clients navigation={navigation}/>
}

class Clients extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clients:[]
        }
    }

    componentDidMount() {
        AdminService.getClients().then(res =>{
            this.setState({clients: res.data})
        })
    }



    render() {
        return (

            <form className='menu-form'>
                <h1>Clients</h1>
                <table className="cd">
                    <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>Nom de famille</th>
                        <th>Address</th>
                        <th>Numero de telephone</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.clients.map(client =>
                            <tr key={client.id}>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.address}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.email}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
        )
    }
}