import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Categoria} from '../../models/categoria.models';
import {CategoriaService} from '../../services/categoria.service';
import {Ingrediente} from '../../models/ingrediente.models';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-pubblicaricetta',
  templateUrl: './pubblicaricetta.page.html',
  styleUrls: ['./pubblicaricetta.page.scss'],
})
export class PubblicaricettaPage implements OnInit {
  private creaFormModel: FormGroup;
  difficolta: string[] = ['FACILE', 'MEDIO', 'DIFFICILE'];
  tempocottura: number[] = [30, 60, 90, 120];
  categorie: Categoria[] = [];
  ingredienti: Ingrediente[] = [{ IDingrediente: 0, nome: 'Pomodorini' },
    { IDingrediente: 1, nome: 'Sale' },
    { IDingrediente: 2, nome: 'Pepe' },
    { IDingrediente: 3, nome: 'Pane' },
    { IDingrediente: 4, nome: 'Olio extravergine'} ];

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private categoriaService: CategoriaService,
              public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();

    this.creaFormModel = this.formBuilder.group({
      nomericetta: ['', Validators.compose([Validators.required])],
      descrizione: ['', Validators.compose([Validators.required])],
      difficolta: ['', Validators.compose([Validators.required])],
      tempocottura: ['', Validators.compose([Validators.required])],
      categoria: ['', Validators.compose([Validators.required])],
      ingredienti: ['', Validators.compose([Validators.required])],
      preparazione: ['', Validators.compose([Validators.required])],
    });

    this.categoriaService.getAll().subscribe(result => {
      this.categorie = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });

    /*
    this.ingredienteService.getAll().subscribe(result => {
      this.ingredienti = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
    */

  }

  onSubmit() {

  }

  goToListaRicette() {
    this.navController.navigateRoot('tabs/listaricette');
  }

  resetForm() {
    this.creaFormModel.reset();
    this.photoService.photos = [];
    this.photoService.removeData();
  }

}
