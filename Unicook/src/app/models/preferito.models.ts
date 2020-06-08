import {Utente} from './utente.models';
import {Ricetta} from './ricetta.models';

export class Preferito {
    IDpreferito: number;
    data: string;
    utente: Utente;
    ricetta: Ricetta;
}
