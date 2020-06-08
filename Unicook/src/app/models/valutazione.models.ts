import {Utente} from './utente.models';
import {Ricetta} from './ricetta.models';

export class Valutazione{
    IDvalutazione: number;
    data: string;
    like: boolean;
    unlike: boolean;
    utente: Utente;
    ricetta: Ricetta;
}
