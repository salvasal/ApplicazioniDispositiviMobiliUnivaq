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
  isLogged = false;

  constructor(private translateService: TranslateService,
              private router: Router,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.utenteService.isLogged().subscribe(result => {
      this.isLogged = result;
    }, error => {
      console.log(error);
    });
  }

  goToListaRicette() {
    this.router.navigate(['/tabs/listaricette']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    this.utenteService.logout();
  }

}
