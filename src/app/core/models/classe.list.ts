export  type ClasseListe ={

    id: number,
    libelle: string,
    effectif: number,
    filiere:string,
    niveau:string
  
}

export  interface ClasseCreate {
    id?: number,
    libelle: string,
    effectif: string,
    filiere: string,
    niveau: string,
}