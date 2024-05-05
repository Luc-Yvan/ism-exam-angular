export  type SalleListe ={

    id: number,
    nom:string,
    numero: string,
    capacite: number,
   
}
export  interface SalleCreate {
    id?: number,
    nom: string,
    numero: string,
    capacite: string,
    
}