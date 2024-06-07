import { ClasseListe } from "./classe.list"

export  type InscriptionListe ={
    id: number,
    anneeScolaire: string,
    etudiant:string,
    tuteur:string,
    matricule:string,
    classe:ClasseListe
}

export interface InscriptionCreate {
    id?: number,
    anneeScolaire:string,
    etudiant:string,
    tuteur:string,
    matricule:string,
    classe:string

}