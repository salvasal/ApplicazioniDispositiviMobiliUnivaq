import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {UtenteService} from '../../services/utente.service';

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
  isLogged = false;

  constructor(private translateService: TranslateService,
              private router: Router,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.initTranslate();

    this.utenteService.isLogged().subscribe(result => {
      this.isLogged = result;
    }, error => {
      console.log(error);
    });
  }

  goToListaRicette() {
    this.router.navigate(['/tabs/listaricette']);
  }

  logout() {
    this.utenteService.logout();
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
