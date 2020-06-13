import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-pubblicaricetta',
  templateUrl: './pubblicaricetta.page.html',
  styleUrls: ['./pubblicaricetta.page.scss'],
})
export class PubblicaricettaPage implements OnInit {
  private creaFormModel: FormGroup;
  difficolta: any[] = ['FACILE', 'MEDIO', 'DIFFICILE'];

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.creaFormModel = this.formBuilder.group({
      nomericetta: ['', Validators.compose([Validators.required])],
      descrizione: ['', Validators.compose([Validators.required])],
      difficolta: ['', Validators.compose([Validators.required])],
    });
  }

  goToListaRicette() {
    this.navController.navigateRoot('tabs/listaricette');
  }

}
