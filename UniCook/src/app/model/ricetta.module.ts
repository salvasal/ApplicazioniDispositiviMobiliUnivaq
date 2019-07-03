import {Categoria} from './categoria.model';
import {Ingrediente} from './ingrediente.model';
import {Immagine} from './immagine.model';

export class Ricetta {
    idricetta: string;
    nomericetta: string;
    descrizione: string;
    preparazione: string;
    tempocottura: string;
    difficolta: string;
    categoria: Categoria;
    ingredienti: Array<Ingrediente>;
    immagini: Array<Immagine>;
}
