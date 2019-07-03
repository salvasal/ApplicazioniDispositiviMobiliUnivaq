import {Time} from '@angular/common';
import {Utente} from './utente.model';
import {Ricetta} from './ricetta.module';

export class Pubblicazione {
    idpubblicazione: string;
    data: Date;
    ora: Time;
    utente: Utente;
    ricetta: Ricetta;
}
