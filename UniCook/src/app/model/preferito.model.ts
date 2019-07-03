import {Utente} from './utente.model';
import {Ricetta} from './ricetta.module';

export class Preferito {
    idpreferito: string;
    data: Date;
    utente: Utente;
    ricetta: Ricetta;
}
