import {Categoria} from './categoria.models';
import {Ingrediente} from './ingrediente.models';
import {Photo} from './photo.models';
import {Utente} from './utente.models';

export class Ricetta {
    IDricetta: number;
    nomericetta: string;
    descrizione: string;
    preparazione: string;
    tempocottura: number;
    difficolta: string;
    data: string;
    ora: string;
    categoria: Categoria;
    ingredienti: Ingrediente[];
    immagini: Photo[];
    utente: Utente;

}
