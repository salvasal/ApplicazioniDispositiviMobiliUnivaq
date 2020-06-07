import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  private loginHeader: string;
  private categorieTab: string;
  private ingredientiTab: string;
  private listaPreferitiTab: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.get('LOGIN_HEADER').subscribe((data) => {
      this.loginHeader = data;
    });
    this.translateService.get('CATEGORIE_TAB').subscribe((data) => {
      this.categorieTab = data;
    });
    this.translateService.get('INGREDIENTI_TAB').subscribe((data) => {
      this.ingredientiTab = data;
    });
    this.translateService.get('LISTAPREFERITI_TAB').subscribe((data) => {
      this.listaPreferitiTab = data;
    });
  }

}
