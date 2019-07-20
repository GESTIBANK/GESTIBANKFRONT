import { User } from '../user';

export class DemandeOuverture {
    constructor(public admin: number, public atraiter: boolean, public conseiller: number, public valide: boolean) {}

}
