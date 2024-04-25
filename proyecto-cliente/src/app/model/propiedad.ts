import { Arrendador } from "./arrendador";

export class Propiedad {

    constructor(
        public id: number,
        public nombrePropiedad: string,
        public municipio: string,
        public departamento: string,
        public tipoIngreso: string,
        public descripcion: string,
        public cantHabitaciones: number,
        public cantBanos: number,
        public permiteMascotas: Boolean,
        public tienePiscina: Boolean,
        public tieneAsador: Boolean,
        public valorNoche: number,
        public arrendadorId: number
    ){}
}