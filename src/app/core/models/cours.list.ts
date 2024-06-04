import { ClasseListe } from "./classe.list"
import { ProfListe } from "./prof.list"

export  type CoursListe ={

    id: number,
    libelle: string,
    volume_horaire: number,
    professeur:string,
    classe:string,
    etatCours:string,
 
}
export interface CoursCreate {
    id?: number,
    libelle: string,
    volume_horaire: number,
    professeurs: ProfListe[],
    classes:ClasseListe[]
}