import { ClasseListe } from "./classe.list"

export  type InscriptionListe ={
    id: number,
    anneeScolaire: string,
    effectif: number,
    etudiant:string,
    tuteur:string,
    matricule:string,
    classe:ClasseListe
}