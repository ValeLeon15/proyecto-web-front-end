export class JwtAuthenticationResponse {
    constructor(public id: number, public token: string, public correo: string, public role: string) { }
}
