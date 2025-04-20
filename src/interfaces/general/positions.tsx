export enum positions {
   "pilar" = "Pilar" , 
   "hooker" = "Hooker" , 
   "segunda_linea" = "Segunda línea" , 
   "tercera_linea" = "Tercera línea" , 
   "medio_scrum" = "Medio scrum" , 
   "apertura" = "Apertura" , 
   "centro" = "Centro" , 
   "wing" = "Wing" , 
   "fullback" = "Fullback"
}

export type PositionsKey = keyof typeof positions;  