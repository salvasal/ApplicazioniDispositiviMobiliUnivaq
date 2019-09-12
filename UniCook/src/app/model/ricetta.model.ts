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

// difficolta
// export const FACILE = 'FACILE';
// export const MEDIA = 'MEDIA';
// export const DIFFICILE = 'DIFFICILE';
export const DIFFICOLTA = ['FACILE', 'MEDIA', 'DIFFICILE'];

// tempi di cottura
// export const DIECI = '10MIN';
// export const VENTI = '20MIN';
// export const TRENTA = '30MIN';
// export const QUARANTINQUE = '45MIN';
// export const ORA = '1H';
export const TEMPI_COTTURA = ['10MIN', '20MIN', '30MIN', '45MIN', '1H'];

// categoria
// export const ANTIPASTO = 'ANTIPASTO';
// export const PRIMO = 'PRIMO';
// export const SECONDO = 'SECONDO';
// export const CONTORNO =  'CONTORNO';
// export const DOLCE = 'DOLCE';
export const CATEGORIA = ['ANTIPASTO', 'PRIMO', 'SECONDO', 'CONTORNO', 'DOLCE'];

// numero di persone
// export const PICCOLA = 'X2';
// export const GRANDE = 'X4';
export const NUM_PERSONE = ['X2', 'X4'];
