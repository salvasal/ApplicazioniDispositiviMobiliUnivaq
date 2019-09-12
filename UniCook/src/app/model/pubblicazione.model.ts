import {Time} from '@angular/common';
import {Utente} from './utente.model';
import {Ricetta} from './ricetta.model';

export class Pubblicazione {
    idpubblicazione: string;
    data: Date;
    ora: Time;
    utente: Utente;
    ricetta: Ricetta;
}
