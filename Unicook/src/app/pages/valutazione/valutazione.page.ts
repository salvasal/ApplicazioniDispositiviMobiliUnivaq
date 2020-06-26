import { Component, OnInit } from '@angular/core';
import {Ricetta} from '../../models/ricetta.models';
import {ActivatedRoute} from '@angular/router';
import {RicettaService} from '../../services/ricetta.service';

@Component({
  selector: 'app-valutazione',
  templateUrl: './valutazione.page.html',
  styleUrls: ['./valutazione.page.scss'],
})
export class ValutazionePage implements OnInit {
  id = null;
  ricetta: Ricetta = new Ricetta();

  constructor(private activatedRoute: ActivatedRoute,
              private ricettaService: RicettaService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ricettaService.get(this.id).subscribe(result => {
      this.ricetta = result;
    }, error => {
      console.error(error);
    });
  }

}
