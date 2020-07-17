import {Utente} from './utente.models';
import {Ricetta} from './ricetta.models';

export class Valutazione{
    idvalutazione: number;
    data: string;
    like: boolean;
    unlike: boolean;
    utente: Utente;
    ricetta: Ricetta;
}
