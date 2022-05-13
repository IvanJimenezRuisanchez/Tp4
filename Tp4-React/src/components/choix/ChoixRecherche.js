import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ClientService from "../../service/ClientService";
import Select from "react-select/base";


export default function RootFunction (){
    const navigation = useNavigate();
    return <ChoixRecherche navigation={navigation} />
}

const ChoixRecherche= (props) =>{
    const [recherche ,setRecherche] = useState({
        data:"",
    });

    const [selectedOption1, setSelectedOption1] = useState("none");
    const [selectedOption2, setSelectedOption2] = useState("none");

    const options1 = [
        { value: "none", label: "Empty" },
        { value: "CD", label: "CD" },
        { value: "DVD", label: "DVD" },
        { value: "LIVRE", label: "LIVRE" },
    ];

    const options2 = [
        { value: "none", label: "Empty" },
        { value: "AUTEUR", label: "AUTEUR" },
        { value: "TITRE", label: "TITRE" },
        { value: "CATEGORIE", label: "CATEGORIE" },
        { value: "ANNEE", label: "ANNEE" },
    ];

    const handleTypeSelect1 = e => {
        setSelectedOption1(e.value);
    };

    const handleTypeSelect2 = e => {
        setSelectedOption2(e.value);
    };

    function handle(e) {
        const  newData =  {...recherche}
        newData[e.target.id] = e.target.value
        setRecherche(newData)
    }


    function post(){
        console.log(recherche.data)
        console.log(selectedOption1)
        console.log(selectedOption2)
        if(selectedOption1== ("CD")) {
            props.navigation('/cds')
        }
        if(selectedOption1 == ("DVD")) {
            props.navigation('/dvds')
        }
        if(selectedOption1 ==("LIVRE")) {
            props.navigation('/livres')
        }
        ClientService.getDocumentByCriteria(recherche.data,selectedOption1,selectedOption2);
    }
    return (
        <form className="menu-form" onSubmit={(event => post(event))}>
            <h1>Recherher Document</h1>
                <div className="form-control">
                    <label>Recherche:</label>
                    <input onChange={(event => handle(event))} type="text" className="input" id="data"/>
                </div>
                <div className="form-control">
                    <label htmlFor="choixType">Choix d'un type de document:</label>
                    <Select className="input"  onChange={handleTypeSelect1} options={options1} value={options1.filter(function (option){
                        return option.value === selectedOption1;
                    })}/>
                </div>
                <div className="form-control">
                    <label htmlFor="choixCritere">Choix d'un type de document:</label>
                    <Select className="input" onMenuOpen={null} onMenuClose={null} onChange={handleTypeSelect2} options={options2} value={options2.filter(function (option){
                        return option.value === selectedOption2;
                    })}/>
                </div>
                <div className="form-control">
                        <input type="submit"  className="btnChoix" value="Rechercher"/>
                </div>
        </form>
    )
}