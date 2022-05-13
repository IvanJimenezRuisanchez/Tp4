package com.tp3.controllers.params;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Data;

@Data
@JsonAutoDetect
public class Params {
    private int idUser;
    private int idDocument;
    private String date;

}
