import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-listacategorie',
  templateUrl: './listacategorie.page.html',
  styleUrls: ['./listacategorie.page.scss'],
})
export class ListacategoriePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  backtolistaricette() {
   this.navController.navigateRoot('listaricette/lista');
  }
}
