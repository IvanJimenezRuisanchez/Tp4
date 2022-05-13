import axios from "axios";
const CLIENT_RESTAPI_DVDS = 'http://localhost:8081/api/dvds';
const CLIENT_RESTAPI_CDS = 'http://localhost:8081/api/cds';
const CLIENT_RESTAPI_LIVRES = 'http://localhost:8081/api/livres';
const CLIENT_RESTAPI_EMPREUNT = 'http://localhost:8081/api/empreunter';
const CLIENT_RESTAPI_EMPREUNTS = 'http://localhost:8081/api/empreunts';
const CLIENT_RESTAPI_RETOUR = 'http://localhost:8081/api/retourner';
const CLIENT_RESTAPI_RECHERCHE = 'http://localhost:8081/api/recherche';

class ClientService {

    getDvds(){
        return axios.get(CLIENT_RESTAPI_DVDS);
    }
    getCds(){
        return axios.get(CLIENT_RESTAPI_CDS);
    }
    getLivres(){
        return axios.get(CLIENT_RESTAPI_LIVRES);
    }

    postEmpreunt(numberUser,dateDebut,idDocument){
        return axios.post(CLIENT_RESTAPI_EMPREUNT,{idUser: numberUser,date: dateDebut, idDocument: idDocument});
        console.log(numberUser,dateDebut,idDocument);
    }

    postRetour(numberUser,idDocument){
        return axios.post(CLIENT_RESTAPI_RETOUR,{idUser: numberUser,idDocument: idDocument});
        console.log(numberUser,idDocument);
    }

    getDocumentByCriteria(data,choix,critere){
        return axios.get(CLIENT_RESTAPI_RECHERCHE,{params: {data:data,choix:choix,critere:critere}});
    }
    getEmpreunts(numberUser){
        return axios.get(CLIENT_RESTAPI_EMPREUNTS,{params: {idUser: numberUser}});
    }


}

export default new ClientService();