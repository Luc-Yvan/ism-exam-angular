
export type SessionListe ={
    id: number,
    cours:string,
    etatCours: string,
    typeCours: number,
    dateCours:string,
    heureCours:string,
    finCours:string,
    professeur:string,
    salle:string,
    capacite:number
}


export interface SessionCreate {
    id?: number,
    cours:string,
    etatCours: string,
    typeCours: number,
    dateCours:string,
    heureCours:string,
    finCours:string,
    professeur:string,
    classes:string[],
    salle:string,
    capacite:number
}