import { ClasseListe } from "./classe.list"
import { ProfListe } from "./prof.list"

export  type CoursListe ={
    id: number,
    libelle: string,
    volume_horaire: number,
    etatCours:string

 
}

export interface CoursCreate {
    id?: number,
    libelle: string,
    volume_horaire: number,
    professeurs:string[],
    classes:string[]
    etatCours:string
}