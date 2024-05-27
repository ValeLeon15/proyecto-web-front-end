import { UserType } from "./user-type";

export class RegisterDto {
    constructor(public nombre: string, 
        public apellido: string,
        public correo: string,
        public contrasena: string,
        public telefono: number,
        public tipo: UserType) { }
}
