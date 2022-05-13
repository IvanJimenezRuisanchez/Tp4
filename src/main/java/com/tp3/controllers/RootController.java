package com.tp3.controllers;

import com.tp3.controllers.params.Params;
import com.tp3.dto.*;

import com.tp3.service.ServiceAdmin;
import com.tp3.service.ServiceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/")
public class RootController {
    Logger logger = LoggerFactory.getLogger(RootController.class);

    private ServiceAdmin serviceAdmin;
    private ServiceClient serviceClient;
    private String choix;

    public RootController(ServiceAdmin serviceAdmin, ServiceClient serviceClient) {
        this.serviceClient = serviceClient;
        this.serviceAdmin = serviceAdmin;
    }

    @GetMapping(value = "/recherche")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List choixRecherche(@RequestParam("data") String data, @RequestParam("choix") String choix, @RequestParam("critere") String critere ) {
        System.out.println("Hola");
        System.out.println(data);
        System.out.println(choix);
        System.out.println(critere);
        switch (choix){
            case "LIVRE":
                return serviceClient.findLivres(critere,data);
            case "DVD":
                return serviceClient.findDvds(critere,data);
            case "CD":
                return serviceClient.findCds(critere,data);
        }
        return null;
    }

    @GetMapping(value = "/dvds")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<DvdDto> getDvds() {
        return serviceClient.getAllDvds();
    }

    @GetMapping(value = "/cds")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<CdDto> getCds() {
        return serviceClient.getAllCds();


    }

    @GetMapping(value = "/livres")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<LivreDto> getLivres() {
        return serviceClient.getAllLivres();
    }

    @GetMapping(value = "/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<ClientDto> getClients() {
        return serviceAdmin.getAllCients();
    }


    @PostMapping(value = "/empreunter")
    @CrossOrigin(origins = "http://localhost:3000")
    public void empreuntPost(@RequestBody final Params params) {
        serviceClient.empreunter(params.getIdUser(),params.getIdDocument()
                , LocalDate.parse(params.getDate()));
    }

    @PostMapping(value = "/retourner")
    @CrossOrigin(origins = "http://localhost:3000")
    public void retournerPost(@RequestBody final Params params) {
        System.out.println(params.getIdUser());
        System.out.println(params.getIdDocument());
        serviceClient.retourner(params.getIdUser(),params.getIdDocument());
    }

    @PostMapping(value = "/ajoutCd")
    @CrossOrigin(origins = "http://localhost:3000")
    public void ajoutCd(@RequestBody final CdDto cdDto) {
        serviceAdmin.addDocumentToBiblio(cdDto.getTitre(),cdDto.getAnneePublication(),cdDto.getAuteur(),"","",
                cdDto.getType(),cdDto.getDuration(),cdDto.getNbrExemplaire(),"CD");
    }
    @PostMapping(value = "/ajoutDvd")
    @CrossOrigin(origins = "http://localhost:3000")
    public void ajoutDvd(@RequestBody final DvdDto dvdDtoDto) {
        serviceAdmin.addDocumentToBiblio(dvdDtoDto.getTitre(), dvdDtoDto.getAnneePublication(), dvdDtoDto.getAuteur(),"","",
                dvdDtoDto.getType(), dvdDtoDto.getDuration(), dvdDtoDto.getNbrExemplaire(),"DVD");
    }

    @PostMapping(value = "/ajoutLivre")
    @CrossOrigin(origins = "http://localhost:3000")
    public void ajoutLivre(@RequestBody final LivreDto livreDto) {
        serviceAdmin.addDocumentToBiblio(livreDto.getTitre(), livreDto.getAnneePublication(), livreDto.getAuteur(),livreDto.getEditeur(),livreDto.getMaisonDePublication(),
                livreDto.getType(), "", livreDto.getNbrExemplaire(),"LIVRE");
    }

    @PostMapping(value = "/ajoutClient")
    @CrossOrigin(origins = "http://localhost:3000")
    public void ajoutLivre(@RequestBody final ClientDto clientDto) {
        serviceAdmin.addClient(clientDto.getFirstName(),clientDto.getLastName(),clientDto.getAddress(),
                clientDto.getPhoneNumber(),clientDto.getEmail());
    }

    @GetMapping(value = "/empreunts")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<EmpreuntDto> empreuntsGetById(@RequestParam("idUser") int id ) {
        return serviceClient.getAllEmpreuntByUser(id);
    }

    @GetMapping(value = "/empreuntsList")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public List<EmpreuntDto> empreuntsGet() {
        return serviceAdmin.getAllEmpreunts();
    }

}
