package com.tp3.service;

import com.tp3.dto.ClientDto;
import com.tp3.dto.DocumentDto;
import com.tp3.dto.EmpreuntDto;
import com.tp3.dto.LivreDto;
import com.tp3.model.*;
import com.tp3.repository.ClientRepository;
import com.tp3.repository.DocumentRepository;
import com.tp3.repository.EmpreuntRepository;
import com.tp3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceAdmin {
        @Autowired
        private UserRepository userRepository;
        @Autowired
        private DocumentRepository documentRepository;
        @Autowired
        private ClientRepository clientRepository;
        @Autowired
        private EmpreuntRepository empreuntRepository;


        public Utilisateur addUserToBliblio(String firstName, String lastName, String address, String phoneNumber, String email, LocalDate dateEmbauche, String role) {
            Utilisateur user = null;
            switch (role.toUpperCase()){
                case "GESTIONNAIRE":
                    user = new Gestionnaire(firstName,lastName,address,phoneNumber,email,dateEmbauche);
                    break;
                case "PREPOSE":
                    user = new Prepose(firstName,lastName,address,phoneNumber,email,dateEmbauche);
                    break;
            }
            return userRepository.save(user);
        }

        public ClientDto addClient(String firstName, String lastName, String address, String phoneNumber, String email){
            Client client = new Client(firstName,lastName,address,phoneNumber,email);
            userRepository.save(client);
            return new ClientDto(firstName,lastName,address,phoneNumber,email);
        }

    public DocumentDto addDocumentToBiblio(String titre, int anneePub, String auteur , String editeur, String maisonDePublication, String type, String duration, int nbrExemplaires, String typeDocument) {
        Document document = null;
        switch (typeDocument.toUpperCase()) {
            case "LIVRE":
                document = new Livre(titre,anneePub,auteur,nbrExemplaires,editeur,maisonDePublication,type);
                break;
            case "CD":
                document = new Cd(titre, anneePub, auteur, nbrExemplaires,duration, type);
                break;
            case "DVD":
                document = new Dvd(titre, anneePub, auteur,nbrExemplaires, duration, type);
                break;
        }
        documentRepository.save(document);
        return new DocumentDto(titre,anneePub,auteur,nbrExemplaires,duration,type,editeur,maisonDePublication);
    }

    public List<ClientDto> getAllCients(){
            return toClientDTOList(clientRepository.findAll());
    }

    private List<ClientDto> toClientDTOList(List<Client> clients){
        List<ClientDto> clientDtos = new ArrayList<>();
        for(Client client : clients){
            clientDtos.add(new ClientDto(client.getFirstName(),client.getLastName(),client.getAddress(),client.getPhoneNumber(),client.getEmail()));
        }
        return clientDtos;
    }

    public List<EmpreuntDto> getAllEmpreunts() {
            return toEmpreuntsDto(empreuntRepository.findAll());
    }

    private List<EmpreuntDto> toEmpreuntsDto(List<Empreunt> empreunts) {
        List<EmpreuntDto> empreuntDtos = new ArrayList<>();
        for(Empreunt empreunt : empreunts){
            empreuntDtos.add(new EmpreuntDto(empreunt.getIdEmpreunt(),empreunt.getDocument().getIdDocument(),empreunt.getDateDebut().toString(),empreunt.getDateFin().toString(),empreunt.getStatus(),empreunt.getClient().getIdUser()));
        }
        return empreuntDtos;
    }
}
