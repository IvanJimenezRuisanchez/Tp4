import axios from "axios";
const CLIENT_RESTAPI_ADD_CD = 'http://localhost:8081/api/ajoutCd';
const CLIENT_RESTAPI_ADD_DVD = 'http://localhost:8081/api/ajoutDvd';
const CLIENT_RESTAPI_ADD_LIVRE = 'http://localhost:8081/api/ajoutLivre';
const CLIENT_RESTAPI_ADD_CLIENT = 'http://localhost:8081/api/ajoutClient';
const CLIENT_RESTAPI_GET_CLIENTS = 'http://localhost:8081/api/clients';
const CLIENT_RESTAPI_GET_ADMIN_EMPREUNTS = 'http://localhost:8081/api/empreuntsList';

class AdminService{
    postCd(titre,annePub,auteur,nbrExemplaires,duration,typeCd){
        return axios.post(CLIENT_RESTAPI_ADD_CD,{titre:titre,anneePublication:annePub,auteur:auteur,
            nbrExemplaire:nbrExemplaires,duration:duration,type:typeCd});
    }

    postDvd(titre,annePub,auteur,nbrExemplaires,duration,typeCd){
        return axios.post(CLIENT_RESTAPI_ADD_DVD,{titre:titre,anneePublication:annePub,auteur:auteur,
            nbrExemplaire:nbrExemplaires,duration:duration,type:typeCd});
    }

    postLivre(titre,annePub,auteur,nbrExemplaires,editeur,maisonDePublication,typeCd){
        return axios.post(CLIENT_RESTAPI_ADD_LIVRE,{titre:titre,anneePublication:annePub,auteur:auteur,
            nbrExemplaire:nbrExemplaires,editeur:editeur,maisonDePublication:maisonDePublication,type:typeCd});
    }

    postClient(firstName, lastName, address, phoneNumber, email) {
        return axios.post(CLIENT_RESTAPI_ADD_CLIENT,{firstName:firstName,lastName:lastName,address:address,
            phoneNumber:phoneNumber,email:email})
    }

    getClients(){
        return axios.get(CLIENT_RESTAPI_GET_CLIENTS);
    }

    getAllEmpreunts() {
        return axios.get(CLIENT_RESTAPI_GET_ADMIN_EMPREUNTS);
    }
}

export default new AdminService();